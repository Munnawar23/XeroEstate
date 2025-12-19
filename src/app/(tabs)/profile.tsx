import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      // Redirect to login screen after logout
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Get user initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <ScrollView className="flex-1 bg-light-background dark:bg-dark-background">
      {/* Header */}
      <View className="bg-light-accent dark:bg-dark-accent px-8 pt-16 pb-10 items-center rounded-b-3xl">
        <View className="w-20 h-20 rounded-full bg-white items-center justify-center mb-4">
          <Text className="text-3xl font-heading text-light-accent dark:text-dark-accent">
            {user?.name ? getInitials(user.name) : 'U'}
          </Text>
        </View>
        <Text className="text-2xl font-heading text-white mb-1">
          {user?.name || 'User'}
        </Text>
        <Text className="text-sm font-body text-teal-100 dark:text-teal-200">
          {user?.email || 'user@example.com'}
        </Text>
      </View>

      {/* Activity Stats */}
      <View className="px-4 pt-4">
        <Text className="text-xl font-heading mb-4 text-light-text dark:text-dark-text">
          My Activity
        </Text>
        
        <View className="flex-row justify-between">
          <View className="bg-light-surface dark:bg-dark-surface flex-1 p-5 rounded-xl items-center mx-1 shadow-sm">
            <Text className="text-3xl font-heading text-light-accent dark:text-dark-accent mb-1">
              12
            </Text>
            <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
              Saved
            </Text>
          </View>

          <View className="bg-light-surface dark:bg-dark-surface flex-1 p-5 rounded-xl items-center mx-1 shadow-sm">
            <Text className="text-3xl font-heading text-light-accent dark:text-dark-accent mb-1">
              5
            </Text>
            <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
              Viewed
            </Text>
          </View>

          <View className="bg-light-surface dark:bg-dark-surface flex-1 p-5 rounded-xl items-center mx-1 shadow-sm">
            <Text className="text-3xl font-heading text-light-accent dark:text-dark-accent mb-1">
              3
            </Text>
            <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
              Contacted
            </Text>
          </View>
        </View>
      </View>

      {/* Settings Menu */}
      <View className="px-4 pt-4 pb-6">
        <Text className="text-xl font-heading mb-4 text-light-text dark:text-dark-text">
          Settings
        </Text>

        <TouchableOpacity className="bg-light-surface dark:bg-dark-surface flex-row items-center px-4 py-4 rounded-xl mb-2 shadow-sm">
          <Text className="text-2xl mr-4">👤</Text>
          <Text className="flex-1 text-base font-bodyMedium text-light-text dark:text-dark-text">
            Edit Profile
          </Text>
          <Text className="text-2xl text-light-subtext dark:text-dark-subtext">›</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-light-surface dark:bg-dark-surface flex-row items-center px-4 py-4 rounded-xl mb-2 shadow-sm">
          <Text className="text-2xl mr-4">🔔</Text>
          <Text className="flex-1 text-base font-bodyMedium text-light-text dark:text-dark-text">
            Notifications
          </Text>
          <Text className="text-2xl text-light-subtext dark:text-dark-subtext">›</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-light-surface dark:bg-dark-surface flex-row items-center px-4 py-4 rounded-xl mb-2 shadow-sm">
          <Text className="text-2xl mr-4">❤️</Text>
          <Text className="flex-1 text-base font-bodyMedium text-light-text dark:text-dark-text">
            Saved Properties
          </Text>
          <Text className="text-2xl text-light-subtext dark:text-dark-subtext">›</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-light-surface dark:bg-dark-surface flex-row items-center px-4 py-4 rounded-xl mb-2 shadow-sm">
          <Text className="text-2xl mr-4">⚙️</Text>
          <Text className="flex-1 text-base font-bodyMedium text-light-text dark:text-dark-text">
            Preferences
          </Text>
          <Text className="text-2xl text-light-subtext dark:text-dark-subtext">›</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-light-surface dark:bg-dark-surface flex-row items-center px-4 py-4 rounded-xl mb-2 shadow-sm">
          <Text className="text-2xl mr-4">ℹ️</Text>
          <Text className="flex-1 text-base font-bodyMedium text-light-text dark:text-dark-text">
            Help & Support
          </Text>
          <Text className="text-2xl text-light-subtext dark:text-dark-subtext">›</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="bg-light-surface dark:bg-dark-surface flex-row items-center px-4 py-4 rounded-xl mt-2 shadow-sm"
          onPress={handleLogout}
          disabled={isLoggingOut}
          style={{ opacity: isLoggingOut ? 0.6 : 1 }}
        >
          {isLoggingOut ? (
            <>
              <ActivityIndicator color="#ef4444" size="small" className="mr-4" />
              <Text className="flex-1 text-base font-bodyMedium text-red-500">
                Logging out...
              </Text>
            </>
          ) : (
            <>
              <Text className="text-2xl mr-4">🚪</Text>
              <Text className="flex-1 text-base font-bodyMedium text-red-500">
                Logout
              </Text>
              <Text className="text-2xl text-light-subtext dark:text-dark-subtext">›</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
