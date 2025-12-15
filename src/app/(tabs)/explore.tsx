import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView className="flex-1 bg-light-background dark:bg-dark-background">
      {/* Header */}
      <View className="bg-light-accent dark:bg-dark-accent px-8 pt-16 pb-10 rounded-b-3xl">
        <Text className="text-4xl font-heading text-white mb-2">🔍 Explore</Text>
        <Text className="text-base font-body text-teal-100 dark:text-teal-200">
          Search for properties
        </Text>
      </View>

      {/* Search Bar */}
      <View className="px-4 pt-4">
        <TextInput
          className="bg-light-surface dark:bg-dark-surface px-4 py-4 rounded-xl text-base font-body text-light-text dark:text-dark-text shadow-sm"
          placeholder="Search location, property type..."
          placeholderTextColor="#9ca3af"
        />
      </View>

      {/* Popular Locations */}
      <View className="px-4 pt-4">
        <Text className="text-xl font-heading mb-4 text-light-text dark:text-dark-text">
          Popular Locations
        </Text>
        
        <View className="flex-row flex-wrap justify-between">
          <View className="bg-light-surface dark:bg-dark-surface w-[48%] p-5 rounded-xl mb-3 items-center shadow-sm">
            <Text className="text-4xl mb-2">🌆</Text>
            <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text mb-1">
              New York
            </Text>
            <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
              234 properties
            </Text>
          </View>

          <View className="bg-light-surface dark:bg-dark-surface w-[48%] p-5 rounded-xl mb-3 items-center shadow-sm">
            <Text className="text-4xl mb-2">🌴</Text>
            <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text mb-1">
              Miami
            </Text>
            <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
              156 properties
            </Text>
          </View>

          <View className="bg-light-surface dark:bg-dark-surface w-[48%] p-5 rounded-xl mb-3 items-center shadow-sm">
            <Text className="text-4xl mb-2">🌉</Text>
            <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text mb-1">
              San Francisco
            </Text>
            <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
              189 properties
            </Text>
          </View>

          <View className="bg-light-surface dark:bg-dark-surface w-[48%] p-5 rounded-xl mb-3 items-center shadow-sm">
            <Text className="text-4xl mb-2">🎬</Text>
            <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text mb-1">
              Los Angeles
            </Text>
            <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
              298 properties
            </Text>
          </View>
        </View>
      </View>

      {/* Property Types */}
      <View className="px-4 pt-4 pb-6">
        <Text className="text-xl font-heading mb-4 text-light-text dark:text-dark-text">
          Property Types
        </Text>

        <View className="bg-light-surface dark:bg-dark-surface flex-row items-center px-4 py-4 rounded-xl mb-3 shadow-sm">
          <Text className="text-3xl mr-4">🏠</Text>
          <Text className="text-lg font-bodyMedium text-light-text dark:text-dark-text">
            Houses
          </Text>
        </View>

        <View className="bg-light-surface dark:bg-dark-surface flex-row items-center px-4 py-4 rounded-xl mb-3 shadow-sm">
          <Text className="text-3xl mr-4">🏢</Text>
          <Text className="text-lg font-bodyMedium text-light-text dark:text-dark-text">
            Apartments
          </Text>
        </View>

        <View className="bg-light-surface dark:bg-dark-surface flex-row items-center px-4 py-4 rounded-xl mb-3 shadow-sm">
          <Text className="text-3xl mr-4">🏘️</Text>
          <Text className="text-lg font-bodyMedium text-light-text dark:text-dark-text">
            Condos
          </Text>
        </View>

        <View className="bg-light-surface dark:bg-dark-surface flex-row items-center px-4 py-4 rounded-xl mb-3 shadow-sm">
          <Text className="text-3xl mr-4">🏰</Text>
          <Text className="text-lg font-bodyMedium text-light-text dark:text-dark-text">
            Villas
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
