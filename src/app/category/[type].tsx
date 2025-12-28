import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeCard from "@/components/common/HomeCard";
import ScreenHeader from "@/components/common/ScreenHeader";
import EmptyState from "@/components/layout/EmptyState";
import ErrorState from "@/components/layout/ErrorState";
import LoadingState from "@/components/layout/LoadingState";
import { useProperties } from "@/hooks/useProperties";

const ITEMS_PER_PAGE = 8;

const CategoryScreen = () => {
  const { type } = useLocalSearchParams<{ type: string }>();
  const { properties, featuredProperties, loading, error, refetch } = useProperties();
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  // Filter properties by category type
  const categoryProperties = useMemo(() => {
    if (type === "premium") {
      return featuredProperties;
    }
    return properties;
  }, [properties, featuredProperties, type]);

  // Paginated properties
  const paginatedProperties = useMemo(() => {
    return categoryProperties.slice(0, page * ITEMS_PER_PAGE);
  }, [categoryProperties, page]);

  const hasMore = paginatedProperties.length < categoryProperties.length;

  const handleCardPress = (id: string) => {
    router.push(`/property/${id}`);
  };

  const handleLoadMore = () => {
    if (hasMore && !loadingMore) {
      setLoadingMore(true);
      // Simulate loading delay for better UX
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setLoadingMore(false);
      }, 500);
    }
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
        data={paginatedProperties}
        numColumns={2}
        renderItem={({ item }) => (
          <HomeCard
            item={item}
            onPress={() => handleCardPress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <View className="px-5 pt-5 pb-3">
            <Text className="text-base font-body text-light-subtext dark:text-dark-subtext">
              Found {categoryProperties.length}{" "}
              {categoryProperties.length === 1 ? "property" : "properties"}
            </Text>
          </View>
        }
        ListEmptyComponent={
          <EmptyState
            title="No properties found"
            message={
              type === "premium"
                ? "No premium listings available at the moment"
                : "No properties available"
            }
          />
        }
        ListFooterComponent={
          loadingMore && hasMore ? (
            <View className="py-6 items-center">
              <ActivityIndicator size="large" color="#3B82F6" />
              <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-2">
                Loading more...
              </Text>
            </View>
          ) : !hasMore && paginatedProperties.length > 0 ? (
            <View className="py-8 px-5 items-center">
              <Ionicons 
                name="checkmark-circle" 
                size={48} 
                color="#10B981" 
              />
              <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text mt-3">
                That's all for now!
              </Text>
              <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-1">
                You've seen all {categoryProperties.length} properties
              </Text>
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default CategoryScreen;
