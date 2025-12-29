import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import Filters from "@/components/common/Filters";
import HomeCard from "@/components/common/HomeCard";
import Search from "@/components/common/Search";
import EmptyState from "@/components/layout/EmptyState";
import ErrorState from "@/components/layout/ErrorState";
import LoadingState from "@/components/layout/LoadingState";
import { useProperties } from "@/hooks/useProperties";

const ITEMS_PER_PAGE = 8;

const Explore = () => {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();
  const { properties, loading, error, refetch } = useProperties();
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

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

  // Paginated properties
  const paginatedProperties = useMemo(() => {
    return filteredProperties.slice(0, page * ITEMS_PER_PAGE);
  }, [filteredProperties, page]);

  const hasMore = paginatedProperties.length < filteredProperties.length;

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

  useEffect(() => {
    setPage(1); // Reset page when filters change
    refetch();
  }, [params.filter, params.query]);

  const handleCardPress = (id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push(`/property/${id}`);
  };

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.back();
  };

  const handleFavoriteToggle = (isFavorite: boolean) => {
    Toast.show({
      type: 'success',
      text1: isFavorite ? 'Added to favorites!' : 'Removed from favorites',
      text2: isFavorite ? '❤️ Property saved' : '💔 Property removed',
      position: 'top',
      visibilityTime: 2000,
    });
  };

  // Show loading state
  if (loading && properties.length === 0) {
    return <LoadingState />;
  }

  // Show error state
  if (error && properties.length === 0) {
    return <ErrorState message={error} onRetry={refetch} />;
  }

  return (
    <SafeAreaView className="h-full bg-light-background dark:bg-dark-background">
      <FlatList
        data={paginatedProperties}
        numColumns={2}
        renderItem={({ item }) => (
          <HomeCard 
            item={item} 
            onPress={() => handleCardPress(item.id)}
            onFavoriteToggle={handleFavoriteToggle} 
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
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
            </View>
          ) : null
        }
        ListEmptyComponent={
          <EmptyState 
            title="No properties found"
            message="Try adjusting your search or filters"
          />
        }
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-normal mt-5 gap-3">
              <TouchableOpacity
                onPress={handleBackPress}
                className="flex flex-row bg-light-surface dark:bg-dark-surface rounded-full size-11 items-center justify-center shadow-sm"
              >
                <Ionicons
                  name="arrow-back"
                  size={20}
                  className="text-light-text dark:text-dark-text"
                />
              </TouchableOpacity>

              <Text className="text-base text-center font-heading text-light-text dark:text-dark-text">
                Search for Your Ideal Home
              </Text>
            </View>

            <Search />

            <View className="mt-5">
              <Filters />

              <Text className="text-xl font-heading text-light-text dark:text-dark-text mt-5">
                Found {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Explore;
