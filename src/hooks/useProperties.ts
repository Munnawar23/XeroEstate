import { convertToPropertyCardData } from "@/helpers/propertyMapper";
import {
  getFeaturedProperties,
  getProperties,
} from "@/services/database";
import type { PropertyCardData } from "@/types/property";
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
