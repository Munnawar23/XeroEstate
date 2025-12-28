import { useAuth } from "@/context/AuthContext";
import { useProperties } from "@/hooks/useProperties";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";

export const useHome = () => {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();
  const { properties, featuredProperties, loading, error, refetch } = useProperties();
  const { user } = useAuth();

  // Filter properties based on search query and category filter
  const filteredProperties = useMemo(() => {
    let filtered = [...properties];

    // Filter by category
    if (params.filter && params.filter !== "All") {
      filtered = filtered.filter(
        (property) => property.category === params.filter
      );
    }

    // Filter by search query
    if (params.query) {
      const query = params.query.toLowerCase();
      filtered = filtered.filter(
        (property) =>
          property.name.toLowerCase().includes(query) ||
          property.address.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [properties, params.filter, params.query]);

  // Handle card press
  const handleCardPress = (id: string) => {
    router.push(`/property/${id}`);
  };

  // Get user initials
  const getUserInitials = () => {
    if (!user?.name) return "USER";
    const names = user.name.split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return user.name.substring(0, 2).toUpperCase();
  };

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return {
    // Data
    filteredProperties,
    featuredProperties,
    loading,
    error,
    user,
    
    // Actions
    refetch,
    handleCardPress,
    
    // Helpers
    getUserInitials,
    getGreeting,
  };
};
