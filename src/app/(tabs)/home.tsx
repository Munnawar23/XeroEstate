import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-light-background dark:bg-dark-background">
      {/* Header */}
      <View className="bg-light-primary dark:bg-dark-primary px-8 pt-16 pb-10 rounded-b-3xl">
        <Text className="text-4xl font-heading text-white mb-2">🏠 XeroEstate</Text>
        <Text className="text-base font-body text-blue-100 dark:text-blue-200">
          Find Your Dream Property
        </Text>
      </View>

      {/* Featured Properties Card */}
      <View className="bg-light-surface dark:bg-dark-surface mx-4 mt-4 p-5 rounded-xl shadow-sm">
        <Text className="text-xl font-heading mb-4 text-light-text dark:text-dark-text">
          Featured Properties
        </Text>
        
        <View className="py-3 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-lg font-bodyMedium text-light-text dark:text-dark-text mb-1">
            Modern Villa
          </Text>
          <Text className="text-base font-heading text-light-primary dark:text-dark-primary mb-1">
            $450,000
          </Text>
          <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext">
            📍 Beverly Hills, CA
          </Text>
        </View>

        <View className="py-3 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-lg font-bodyMedium text-light-text dark:text-dark-text mb-1">
            Luxury Apartment
          </Text>
          <Text className="text-base font-heading text-light-primary dark:text-dark-primary mb-1">
            $320,000
          </Text>
          <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext">
            📍 Manhattan, NY
          </Text>
        </View>

        <View className="py-3">
          <Text className="text-lg font-bodyMedium text-light-text dark:text-dark-text mb-1">
            Beach House
          </Text>
          <Text className="text-base font-heading text-light-primary dark:text-dark-primary mb-1">
            $680,000
          </Text>
          <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext">
            📍 Miami Beach, FL
          </Text>
        </View>
      </View>

      {/* Stats */}
      <View className="flex-row justify-around mx-4 mt-4 mb-6">
        <View className="bg-light-surface dark:bg-dark-surface flex-1 p-5 rounded-xl items-center mx-1 shadow-sm">
          <Text className="text-2xl font-heading text-light-primary dark:text-dark-primary mb-1">
            1,234
          </Text>
          <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
            Properties
          </Text>
        </View>

        <View className="bg-light-surface dark:bg-dark-surface flex-1 p-5 rounded-xl items-center mx-1 shadow-sm">
          <Text className="text-2xl font-heading text-light-primary dark:text-dark-primary mb-1">
            567
          </Text>
          <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
            Agents
          </Text>
        </View>

        <View className="bg-light-surface dark:bg-dark-surface flex-1 p-5 rounded-xl items-center mx-1 shadow-sm">
          <Text className="text-2xl font-heading text-light-primary dark:text-dark-primary mb-1">
            890
          </Text>
          <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
            Sales
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
