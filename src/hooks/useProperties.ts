import {
    convertToPropertyCardData,
    getFeaturedProperties,
    getProperties,
    getPropertiesByType,
    searchProperties,
} from "@/services/database";
import type { Property, PropertyCardData } from "@/types/property";
import { useEffect, useState } from "react";

interface UsePropertiesResult {
  properties: PropertyCardData[];
  featuredProperties: PropertyCardData[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useProperties(): UsePropertiesResult {
  const [properties, setProperties] = useState<PropertyCardData[]>([]);
  const [featuredProperties, setFeaturedProperties] = useState<PropertyCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch all properties and featured properties in parallel
      const [allProperties, featured] = await Promise.all([
        getProperties(),
        getFeaturedProperties(5),
      ]);

      // Convert to UI format
      const convertedProperties = allProperties.map(convertToPropertyCardData);
      const convertedFeatured = featured.map(convertToPropertyCardData);

      setProperties(convertedProperties);
      setFeaturedProperties(convertedFeatured);
    } catch (err) {
      console.error("Error fetching properties:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    properties,
    featuredProperties,
    loading,
    error,
    refetch: fetchData,
  };
}

interface UseFilteredPropertiesParams {
  query?: string;
  filter?: string;
}

interface UseFilteredPropertiesResult {
  filteredProperties: PropertyCardData[];
  loading: boolean;
  error: string | null;
}

export function useFilteredProperties({
  query,
  filter,
}: UseFilteredPropertiesParams): UseFilteredPropertiesResult {
  const [filteredProperties, setFilteredProperties] = useState<PropertyCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        setLoading(true);
        setError(null);

        let properties: Property[] = [];

        // If there's a search query, use search
        if (query && query.trim()) {
          properties = await searchProperties(query);
        }
        // If there's a filter and it's not "All", filter by type
        else if (filter && filter !== "All") {
          properties = await getPropertiesByType(filter);
        }
        // Otherwise, get all properties
        else {
          properties = await getProperties();
        }

        // Convert to UI format
        const converted = properties.map(convertToPropertyCardData);
        setFilteredProperties(converted);
      } catch (err) {
        console.error("Error fetching filtered properties:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch properties");
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredData();
  }, [query, filter]);

  return {
    filteredProperties,
    loading,
    error,
  };
}
