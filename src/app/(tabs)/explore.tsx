import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useMemo } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Filters from "@/components/common/Filters";
import HomeCard from "@/components/common/HomeCard";
import Search from "@/components/common/Search";
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
    router.push(`/property/${id}`);
  };

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
          loading ? (
            <View className="flex-1 items-center justify-center py-20">
              <ActivityIndicator size="large" color="#3B82F6" />
              <Text className="text-base font-bodyMedium text-light-subtext dark:text-dark-subtext mt-4">
                Loading properties...
              </Text>
            </View>
          ) : (
            <View className="flex-1 items-center justify-center py-20">
              <Ionicons
                name="search-outline"
                size={64}
                color="#94A3B8"
              />
              <Text className="text-lg font-bodyMedium text-light-subtext dark:text-dark-subtext mt-4">
                No properties found
              </Text>
              <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-2 text-center px-10">
                Try adjusting your search or filters
              </Text>
            </View>
          )
        }
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <TouchableOpacity
                onPress={() => router.back()}
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

              <TouchableOpacity>
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
