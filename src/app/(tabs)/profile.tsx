import { useAuth } from '@/context/AuthContext';
import { cancelAllNotifications, scheduleDailyNotifications, sendTestNotification } from '@/services/notifications';
import { seedDatabase } from '@/services/seed';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  const { user, logout, refetchUser } = useAuth();
  const router = useRouter();
  const [isSeeding, setIsSeeding] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

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

  const handleSeedDatabase = async () => {
    Alert.alert(
      'Seed Database',
      'This will clear all existing data and create new sample data. Continue?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Continue',
          style: 'destructive',
          onPress: async () => {
            try {
              setIsSeeding(true);
              const result = await seedDatabase();
              
              if (result.success) {
                Alert.alert('Success', result.message);
              } else {
                Alert.alert('Error', result.message);
              }
            } catch (error) {
              console.error('Seed error:', error);
              Alert.alert('Error', 'Failed to seed database');
            } finally {
              setIsSeeding(false);
            }
          },
        },
      ]
    );
  };

  const pickImage = async () => {
    try {
      // Request permission
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (!permissionResult.granted) {
        Alert.alert('Permission Required', 'Please allow access to your photo library to change your profile picture.');
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        const asset = result.assets[0];
        
        // Show uploading alert
        Alert.alert('Uploading', 'Please wait while we upload your profile picture...');
        
        // Import the functions
        const { uploadAvatar, updateUserAvatar } = await import('@/services/appwrite');
        const { appwriteConfig } = await import('@/config/appwrite');
        
        // Prepare file object
        const file = {
          uri: asset.uri,
          name: `avatar-${Date.now()}.jpg`,
          type: 'image/jpeg',
        };
        
        // Upload to Appwrite Storage
        const avatarUrl = await uploadAvatar(file, appwriteConfig.bucketId);
        
        // Update user avatar in Appwrite preferences
        const success = await updateUserAvatar(avatarUrl);
        
        if (success) {
          Alert.alert('Success', 'Profile picture updated successfully!');
          // Refresh user data
          await refetchUser();
        } else {
          Alert.alert('Error', 'Failed to update profile picture');
        }
      }
    } catch (error) {
      console.error('Image picker error:', error);
      Alert.alert('Error', 'Failed to upload image. Please try again.');
    }
  };

  const handleToggleNotifications = async () => {
    try {
      if (notificationsEnabled) {
        // Disable notifications
        await cancelAllNotifications();
        setNotificationsEnabled(false);
        Alert.alert('Disabled', 'Daily notifications have been turned off');
      } else {
        // Enable notifications
        const success = await scheduleDailyNotifications();
        if (success) {
          setNotificationsEnabled(true);
          Alert.alert(
            'Enabled! 🔔',
            'You will receive daily reminders at:\n• 11:00 AM - Morning reminder\n• 9:00 PM - Evening reminder'
          );
        } else {
          Alert.alert('Error', 'Failed to enable notifications. Please check permissions.');
        }
      }
    } catch (error) {
      console.error('Notification toggle error:', error);
      Alert.alert('Error', 'Failed to toggle notifications');
    }
  };

  const handleTestNotification = async () => {
    try {
      const success = await sendTestNotification();
      if (success) {
        Alert.alert('Sent! 🧪', 'Test notification sent successfully!');
      } else {
        Alert.alert('Error', 'Failed to send test notification');
      }
    } catch (error) {
      console.error('Test notification error:', error);
      Alert.alert('Error', 'Failed to send test notification');
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
    <SafeAreaView className="h-full bg-light-background dark:bg-dark-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        {/* Header */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-heading text-light-text dark:text-dark-text">Profile</Text>
          <Ionicons name="notifications-outline" size={24} className="text-light-text dark:text-dark-text" />
        </View>

        {/* User Profile Section */}
        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <View className="size-44 rounded-full bg-light-primary dark:bg-dark-primary items-center justify-center overflow-hidden">
              {user?.avatar && (user.avatar.startsWith('file://') || user.avatar.startsWith('http')) ? (
                <Image
                  source={{ uri: user.avatar }}
                  className="size-full"
                  resizeMode="cover"
                />
              ) : (
                <Text className="text-5xl font-heading text-white">
                  {user?.name ? getInitials(user.name) : 'U'}
                </Text>
              )}
            </View>
            
            <TouchableOpacity 
              onPress={pickImage}
              className="absolute bottom-11 right-2 bg-light-surface dark:bg-dark-surface rounded-full p-2 shadow-lg"
            >
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
          <SettingsItem 
            icon="notifications-outline" 
            title={notificationsEnabled ? "Notifications (On)" : "Notifications (Off)"}
            onPress={handleToggleNotifications}
          />
          <SettingsItem icon="heart-outline" title="Saved Properties" />
          <SettingsItem icon="settings-outline" title="Settings" />
          <SettingsItem icon="help-circle-outline" title="Help & Support" />
        </View>

        {/* Developer Tools Section */}
        <View className="flex flex-col mt-5 border-t pt-5 border-light-subtext/20 dark:border-dark-subtext/20">
          <Text className="text-sm font-bodyMedium text-light-subtext dark:text-dark-subtext mb-2">
            Developer Tools
          </Text>
          {isSeeding ? (
            <View className="flex flex-row items-center gap-3 py-3">
              <ActivityIndicator size="small" color="#3B82F6" />
              <Text className="text-lg font-bodyMedium text-light-text dark:text-dark-text">
                Seeding database...
              </Text>
            </View>
          ) : (
            <>
              <SettingsItem
                icon="cloud-upload-outline"
                title="Seed Database"
                onPress={handleSeedDatabase}
              />
              <SettingsItem
                icon="notifications-outline"
                title="Test Notification"
                onPress={handleTestNotification}
              />
            </>
          )}
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
    </SafeAreaView>
  );
}
