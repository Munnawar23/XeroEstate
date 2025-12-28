import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import {
  FlatList
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeCard from "@/components/common/HomeCard";
import ScreenHeader from "@/components/common/ScreenHeader";
import EmptyState from "@/components/layout/EmptyState";
import ErrorState from "@/components/layout/ErrorState";
import LoadingState from "@/components/layout/LoadingState";
import { useProperties } from "@/hooks/useProperties";

const CategoryScreen = () => {
  const { type } = useLocalSearchParams<{ type: string }>();
  const { properties, featuredProperties, loading, error, refetch } = useProperties();

  // Filter properties by category type
  const categoryProperties = useMemo(() => {
    if (type === "premium") {
      return featuredProperties;
    }
    return properties;
  }, [properties, featuredProperties, type]);

  const handleCardPress = (id: string) => {
    router.push(`/property/${id}`);
  };

  // Get title based on type
  const getTitle = () => {
    if (type === "premium") return "Premium Listings";
    return "All Properties";
  };

  // Show loading state
  if (loading && categoryProperties.length === 0) {
    return <LoadingState />;
  }

  // Show error state
  if (error && categoryProperties.length === 0) {
    return <ErrorState message={error} onRetry={refetch} />;
  }

  return (
    <SafeAreaView className="h-full bg-light-background dark:bg-dark-background">
      <ScreenHeader title={getTitle()} />

      <FlatList
        data={categoryProperties}
        numColumns={2}
        renderItem={({ item }) => (
          <HomeCard
            item={item}
            onPress={() => handleCardPress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyState
            icon="home-outline"
            title="No properties found"
            message={
              type === "premium"
                ? "No premium listings available at the moment"
                : "No properties available"
            }
          />
        }
      />
    </SafeAreaView>
  );
};

export default CategoryScreen;
