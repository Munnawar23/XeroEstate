import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Filters from "@/components/common/Filters";
import HomeCard from "@/components/common/HomeCard";
import PremiumCard from "@/components/common/PremiumCard";
import Search from "@/components/common/Search";
import ErrorState from "@/components/layout/ErrorState";
import LoadingState from "@/components/layout/LoadingState";
import { useHome } from "@/hooks/useHome";

const HomeScreen = () => {
  const {
    filteredProperties,
    featuredProperties,
    loading,
    error,
    user,
    refetch,
    handleCardPress,
    getUserInitials,
    getGreeting,
  } = useHome();

  // Show loading state
  if (loading && filteredProperties.length === 0) {
    return <LoadingState />;
  }

  // Show error state
  if (error && filteredProperties.length === 0) {
    return <ErrorState message={error} onRetry={refetch} />;
  }

  return (
    <SafeAreaView className="h-full bg-light-background dark:bg-dark-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={refetch}
            tintColor="#3B82F6"
          />
        }
      >
        {/* Header Section */}
        <View className="px-5 mt-5">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row">
              <View className="size-12 rounded-full bg-light-primary dark:bg-dark-primary items-center justify-center">
                <Text className="text-xl font-heading text-white">
                  {getUserInitials()}
                </Text>
              </View>

              <View className="flex flex-col items-start ml-2 justify-center">
                <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
                  {getGreeting()}
                </Text>
                <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
                  {user?.name || "Guest"}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Search Section */}
        <View className="px-5">
          <Search />
        </View>

        {/* Premium Listings Section */}
        <View className="my-5">
          <View className="flex flex-row items-center justify-between px-5">
            <Text className="text-xl font-heading text-light-text dark:text-dark-text">
              Premium Listings
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
              <PremiumCard
                item={item}
                onPress={() => handleCardPress(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="flex gap-5 mt-5 px-5"
            ListEmptyComponent={
              <View className="py-10 items-center w-full">
                <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext">
                  No premium listings available
                </Text>
              </View>
            }
          />
        </View>

        {/* Find Your Home Section */}
        <View className="mt-5 px-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-heading text-light-text dark:text-dark-text">
              Find Your Home
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-bodyMedium text-light-primary dark:text-dark-primary">
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <Filters />
        </View>

        {/* Properties Grid */}
        <View className="mt-5 pb-32">
          <FlatList
            data={filteredProperties}
            numColumns={2}
            renderItem={({ item }) => (
              <HomeCard
                item={item}
                onPress={() => handleCardPress(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            columnWrapperClassName="flex gap-5 px-5"
            scrollEnabled={false}
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
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
