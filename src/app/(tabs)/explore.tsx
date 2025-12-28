import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Filters from "@/components/common/Filters";
import HomeCard from "@/components/common/HomeCard";
import Search from "@/components/common/Search";
import EmptyState from "@/components/layout/EmptyState";
import ErrorState from "@/components/layout/ErrorState";
import LoadingState from "@/components/layout/LoadingState";
import { useProperties } from "@/hooks/useProperties";

const Explore = () => {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();
  const { properties, loading, error, refetch } = useProperties();

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

  useEffect(() => {
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
        data={filteredProperties}
        numColumns={2}
        renderItem={({ item }) => (
          <HomeCard item={item} onPress={() => handleCardPress(item.id)} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyState 
            title="No properties found"
            message="Try adjusting your search or filters"
          />
        }
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
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

              <TouchableOpacity onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  className="text-light-text dark:text-dark-text"
                />
              </TouchableOpacity>
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
