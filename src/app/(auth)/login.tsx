import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <View className="flex-1 bg-white dark:bg-dark-background">
      <ScrollView 
        className="flex-1"
        contentContainerClassName="h-full"
      >
        {/* Image Grid - Top Half */}
        <View className="flex-1">
          <Image
            source={require('../../assets/images/login.webp')}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Content - Bottom Half */}
        <View className="px-8 pb-12 pt-8">
          {/* Welcome Text */}
          <View className="mb-8">
            <Text className="text-md font-body text-light-subtext dark:text-dark-subtext text-center mb-2 uppercase tracking-wider">
              WELCOME TO XeroEstate
            </Text>
            <Text className="text-2xl font-heading text-center text-light-text dark:text-dark-text">
              Let's Get You Closer to{'\n'}
              <Text className="text-light-primary dark:text-dark-primary">
                Your Ideal Home
              </Text>
            </Text>
          </View>

          {/* Login Info */}
          <Text className="text-sm font-body text-center text-light-subtext dark:text-dark-subtext mb-6">
            Login to ReState with Google
          </Text>

          {/* Google Sign In Button */}
          <TouchableOpacity 
            className="bg-light-surface dark:bg-dark-surface border border-gray-200 dark:border-gray-700 py-4 px-6 rounded-xl flex-row items-center justify-center mb-4"
            onPress={handleLogin}
          >
            <Ionicons name="logo-google" size={20} color="#DB4437" />
            <Text className="ml-3 text-base font-bodyMedium text-light-text dark:text-dark-text">
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Terms & Privacy */}
          <Text className="text-xs font-body text-center text-light-subtext dark:text-dark-subtext mt-4">
            By continuing, you agree to our{' '}
            <Text className="text-light-primary dark:text-dark-primary">
              Terms of Service
            </Text>
            {' '}and{' '}
            <Text className="text-light-primary dark:text-dark-primary">
              Privacy Policy
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
