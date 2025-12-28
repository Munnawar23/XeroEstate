import { useAuth } from '@/context/AuthContext';
import { hp, wp } from '@/helpers/common';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      setIsLoggingIn(true);
      const success = await login();
      if (success) {
        router.replace('/(tabs)/home');
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <View className="flex-1 bg-light-background dark:bg-dark-background">
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
        <View className="px-8 pb-12 pt-8 bg-light-background dark:bg-dark-background rounded-t-3xl -mt-8">
          {/* Welcome Text */}
          <View className="mb-4">
            <Text className="text-sm font-bodyBold text-light-subtext dark:text-dark-subtext text-center mb-2 uppercase tracking-widest">
              WELCOME TO{' '}
              <Text className="text-light-primary dark:text-dark-primary font-headingBold">
                XeroEstate
              </Text>
            </Text>
            <Text className="text-2xl font-heading text-center text-light-text dark:text-dark-text">
              Let's Get You Closer to{'\n'}
              <Text className="text-light-primary dark:text-dark-primary">
                Your Ideal Home
              </Text>
            </Text>
          </View>

          {/* Login Info */}
          <Text className="text-md font-body text-center text-light-subtext dark:text-dark-subtext mb-6">
            Login to XeroEstate with Google
          </Text>

          {/* Google Sign In Button */}
          <TouchableOpacity 
            className="bg-light-surface dark:bg-dark-surface border border-light-subtext/20 dark:border-dark-subtext/20 rounded-xl flex-row items-center justify-center mb-4"
            style={{
              paddingVertical: hp(2),
              paddingHorizontal: wp(6),
              opacity: isLoggingIn ? 0.6 : 1,
            }}
            onPress={handleLogin}
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <ActivityIndicator color="#DB4437" />
            ) : (
              <>
                <Image 
                  source={require('../../assets/icons/google.webp')} 
                  style={{ width: wp(5), height: wp(5) }}
                  resizeMode="contain"
                />
                <Text className="ml-3 text-lg font-bodyMedium text-light-text dark:text-dark-text">
                  Continue with Google
                </Text>
              </>
            )}
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
