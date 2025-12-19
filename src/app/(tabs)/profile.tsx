import { useAuth } from '@/context/AuthContext';
import { useSafePadding } from '@/hooks/useSafePadding';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

interface SettingsItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between py-3"
  >
    <View className="flex flex-row items-center gap-3">
      <Ionicons name={icon} size={24} className="text-light-text dark:text-dark-text" />
      <Text className={`text-lg font-bodyMedium text-light-text dark:text-dark-text ${textStyle}`}>
        {title}
      </Text>
    </View>

    {showArrow && (
      <Ionicons 
        name="chevron-forward" 
        size={20} 
        className="text-light-subtext dark:text-dark-subtext" 
      />
    )}
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const { paddingTop } = useSafePadding();

  const handleLogout = async () => {
    try {
      await logout();
      Alert.alert('Success', 'Logged out successfully');
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Logout error:', error);
      Alert.alert('Error', 'Failed to logout');
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
    <View className="h-full bg-light-background dark:bg-dark-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        {/* Header */}
        <View className="flex flex-row items-center justify-between" style={{ paddingTop }}>
          <Text className="text-xl font-heading text-light-text dark:text-dark-text">Profile</Text>
          <Ionicons name="notifications-outline" size={24} className="text-light-text dark:text-dark-text" />
        </View>

        {/* User Profile Section */}
        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <View className="size-44 rounded-full bg-light-primary dark:bg-dark-primary items-center justify-center">
              <Text className="text-5xl font-heading text-white">
                {user?.name ? getInitials(user.name) : 'U'}
              </Text>
            </View>
            
            <TouchableOpacity className="absolute bottom-11 right-2 bg-light-surface dark:bg-dark-surface rounded-full p-2 shadow-lg">
              <Ionicons name="pencil" size={20} className="text-light-primary dark:text-dark-primary" />
            </TouchableOpacity>

            <Text className="text-2xl font-heading mt-2 text-light-text dark:text-dark-text">
              {user?.name || 'User'}
            </Text>
          </View>
        </View>

        {/* My Bookings & Payments Section */}
        <View className="flex flex-col mt-10">
          <SettingsItem icon="calendar-outline" title="My Bookings" />
          <SettingsItem icon="wallet-outline" title="Payments" />
        </View>

        {/* General Settings Section */}
        <View className="flex flex-col mt-5 border-t pt-5 border-light-subtext/20 dark:border-dark-subtext/20">
          <SettingsItem icon="person-outline" title="Edit Profile" />
          <SettingsItem icon="notifications-outline" title="Notifications" />
          <SettingsItem icon="heart-outline" title="Saved Properties" />
          <SettingsItem icon="settings-outline" title="Settings" />
          <SettingsItem icon="help-circle-outline" title="Help & Support" />
        </View>

        {/* Logout Section */}
        <View className="flex flex-col border-t mt-5 pt-5 border-light-subtext/20 dark:border-dark-subtext/20">
          <SettingsItem
            icon="log-out-outline"
            title="Logout"
            textStyle="text-red-500"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </View>
  );
}
