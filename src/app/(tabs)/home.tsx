import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useMemo } from "react";
import {
  FlatList,
  Image,
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
import EmptyState from "@/components/layout/EmptyState";
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

  // Limit premium listings to 5
  const limitedPremiumProperties = useMemo(() => {
    return featuredProperties.slice(0, 5);
  }, [featuredProperties]);

  // Limit home properties to 8
  const limitedHomeProperties = useMemo(() => {
    return filteredProperties.slice(0, 8);
  }, [filteredProperties]);

  const handleSeeAllPremium = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/category/premium" as any);
  };

  const handleSeeAllHome = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/category/all" as any);
  };

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
              <View className="size-12 rounded-full bg-light-primary dark:bg-dark-primary items-center justify-center overflow-hidden">
                {user?.avatar && (user.avatar.startsWith('file://') || user.avatar.startsWith('http')) ? (
                  <Image
                    source={{ uri: user.avatar }}
                    className="size-full"
                    resizeMode="cover"
                  />
                ) : (
                  <Text className="text-xl font-heading text-white">
                    {getUserInitials()}
                  </Text>
                )}
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

        {/* Premium Listings Section */}
        <View className="my-5">
          <View className="flex flex-row items-center justify-between px-5">
            <Text className="text-xl font-heading text-light-text dark:text-dark-text">
              Premium Listings
            </Text>
            <TouchableOpacity onPress={handleSeeAllPremium}>
              <Text className="text-base font-bodyMedium text-light-primary dark:text-dark-primary">
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={limitedPremiumProperties}
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
              <EmptyState
                title="No premium listings"
                message="No premium listings available"
              />
            }
          />
        </View>

        {/* Find Your Home Section */}
        <View className="mt-5 px-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-heading text-light-text dark:text-dark-text">
              Find Your Home
            </Text>
            <TouchableOpacity onPress={handleSeeAllHome}>
              <Text className="text-base font-bodyMedium text-light-primary dark:text-dark-primary">
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <Filters />
        </View>

        {/* Properties Grid */}
        <View className="mt-5 pb-5">
          <FlatList
            data={limitedHomeProperties}
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
              <EmptyState
                title="No properties found"
                message="Try adjusting your filters"
              />
            }
          />
        </View>

        {/* Footer */}
        <View className="mt-10 mb-8 px-5">
          <View className="w-full h-px bg-light-subtext/20 dark:bg-dark-subtext/20 mb-6" />
          
          <View className="items-center">
            <View className="flex-row items-center">
              <Text className="text-2xl font-heading text-light-text dark:text-dark-text text-center">
                Xero
              </Text>
              <Text className="text-2xl font-heading text-light-primary dark:text-dark-primary text-center">
                Estate
              </Text>
            </View>
            <Text className="text-base font-body text-light-subtext dark:text-dark-subtext text-center mt-3 max-w-xs">
              Your trusted platform for buying and selling premium properties
            </Text>
            <Text className="text-md font-bodyMedium text-light-subtext dark:text-dark-subtext text-center mt-4">
              Version 1.0.0
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
