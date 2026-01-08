import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ScreenHeader from '@/components/common/ScreenHeader';

export default function AboutScreen() {
  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background" edges={['top']}>
      <ScreenHeader title="About" />

      <ScrollView className="flex-1 px-5 py-8">
        {/* App Name and Version */}
        <View className="items-center mb-8">
          <View className="size-24 rounded-3xl bg-light-primary dark:bg-dark-primary items-center justify-center mb-4">
            <Ionicons name="home" size={48} color="#FFFFFF" />
          </View>
          <Text className="text-3xl font-heading text-light-text dark:text-dark-text mb-2">
            XeroEstate
          </Text>
          <Text className="text-base font-body text-light-subtext dark:text-dark-subtext">
            Version 1.0.0
          </Text>
        </View>

        {/* Description */}
        <View className="mb-8">
          <Text className="text-base font-body text-light-text dark:text-dark-text leading-6 text-center">
            XeroEstate is a beautiful real estate discovery app that brings you stunning, high-quality property listings from around your area. Browse, search, and save properties to find your dream home.
          </Text>
        </View>

        {/* Features Section */}
        <View className="bg-light-surface dark:bg-dark-surface rounded-2xl p-5 mb-6">
          <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-4">
            Features
          </Text>
          
          <View className="flex-row items-start mb-3">
            <Ionicons name="checkmark-circle" size={20} color="#10B981" className="mr-2 mt-0.5" />
            <Text className="flex-1 text-base font-body text-light-text dark:text-dark-text">
              Browse thousands of property listings
            </Text>
          </View>

          <View className="flex-row items-start mb-3">
            <Ionicons name="checkmark-circle" size={20} color="#10B981" className="mr-2 mt-0.5" />
            <Text className="flex-1 text-base font-body text-light-text dark:text-dark-text">
              Advanced search and filters
            </Text>
          </View>

          <View className="flex-row items-start mb-3">
            <Ionicons name="checkmark-circle" size={20} color="#10B981" className="mr-2 mt-0.5" />
            <Text className="flex-1 text-base font-body text-light-text dark:text-dark-text">
              Save your favorite properties
            </Text>
          </View>

          <View className="flex-row items-start mb-3">
            <Ionicons name="checkmark-circle" size={20} color="#10B981" className="mr-2 mt-0.5" />
            <Text className="flex-1 text-base font-body text-light-text dark:text-dark-text">
              Get directions to properties
            </Text>
          </View>

          <View className="flex-row items-start mb-3">
            <Ionicons name="checkmark-circle" size={20} color="#10B981" className="mr-2 mt-0.5" />
            <Text className="flex-1 text-base font-body text-light-text dark:text-dark-text">
              Contact agents directly
            </Text>
          </View>

          <View className="flex-row items-start">
            <Ionicons name="checkmark-circle" size={20} color="#10B981" className="mr-2 mt-0.5" />
            <Text className="flex-1 text-base font-body text-light-text dark:text-dark-text">
              Dark mode support
            </Text>
          </View>
        </View>

        {/* Technology Section */}
        <View className="bg-light-surface dark:bg-dark-surface rounded-2xl p-5 mb-6">
          <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-4">
            Built With
          </Text>
          
          <View className="flex-row items-start mb-3">
            <Ionicons name="logo-react" size={20} color="#61DAFB" className="mr-2 mt-0.5" />
            <Text className="flex-1 text-base font-body text-light-text dark:text-dark-text">
              React Native & Expo
            </Text>
          </View>

          <View className="flex-row items-start mb-3">
            <Ionicons name="server" size={20} color="#F02E65" className="mr-2 mt-0.5" />
            <Text className="flex-1 text-base font-body text-light-text dark:text-dark-text">
              Appwrite Backend
            </Text>
          </View>

          <View className="flex-row items-start">
            <Ionicons name="color-palette" size={20} color="#38BDF8" className="mr-2 mt-0.5" />
            <Text className="flex-1 text-base font-body text-light-text dark:text-dark-text">
              NativeWind (Tailwind CSS)
            </Text>
          </View>
        </View>

        {/* Developer Section */}
        <View className="bg-light-surface dark:bg-dark-surface rounded-2xl p-5 mb-6">
          <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-4">
            Developer
          </Text>
          <Text className="text-base font-body text-light-text dark:text-dark-text mb-3">
            Developed by Munawwar Hussain
          </Text>
          <TouchableOpacity 
            onPress={() => Linking.openURL('mailto:munawwarh48@gmail.com')}
            className="flex-row items-center"
          >
            <Ionicons name="mail" size={18} color="#3B82F6" className="mr-2" />
            <Text className="text-base font-body text-blue-500">
              munawwarh48@gmail.com
            </Text>
          </TouchableOpacity>
        </View>

        {/* Copyright */}
        <View className="items-center py-4">
          <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext text-center">
            © 2026 XeroEstate. All rights reserved.
          </Text>
          <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext text-center mt-1">
            Made with passion for real estate
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
