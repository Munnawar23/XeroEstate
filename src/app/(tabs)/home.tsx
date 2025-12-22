import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FeaturedCard from "@/components/common/FeaturedCard";
import Filters from "@/components/common/Filters";
import PropertyCard from "@/components/common/PropertyCard";
import Search from "@/components/common/Search";
import { featuredProperties, properties } from "@/constants/data";

const Home = () => {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

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
  }, [params.filter, params.query]);

  const handleCardPress = (id: string) => {
    console.log("Property clicked:", id);
    // router.push(`/properties/${id}`);
  };

  return (
    <SafeAreaView className="h-full bg-light-background dark:bg-dark-background">
      <FlatList
        data={filteredProperties}
        numColumns={2}
        renderItem={({ item }) => (
          <PropertyCard item={item} onPress={() => handleCardPress(item.id)} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-10">
            <Ionicons
              name="home-outline"
              size={64}
              color="#94A3B8"
            />
            <Text className="text-lg font-bodyMedium text-light-subtext dark:text-dark-subtext mt-4">
              No properties found
            </Text>
            <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-2">
              Try adjusting your filters
            </Text>
          </View>
        }
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <View className="size-12 rounded-full bg-light-primary dark:bg-dark-primary items-center justify-center">
                  <Text className="text-xl font-heading text-white">JD</Text>
                </View>

                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
                    Good Morning
                  </Text>
                  <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
                    John Doe
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  className="text-light-text dark:text-dark-text"
                />
              </TouchableOpacity>
            </View>

            <Search />

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-heading text-light-text dark:text-dark-text">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-bodyMedium text-light-primary dark:text-dark-primary">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={featuredProperties}
                renderItem={({ item }) => (
                  <FeaturedCard
                    item={item}
                    onPress={() => handleCardPress(item.id)}
                  />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
            </View>

            <View className="mt-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-heading text-light-text dark:text-dark-text">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-bodyMedium text-light-primary dark:text-dark-primary">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <Filters />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
