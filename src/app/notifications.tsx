import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cancelAllNotifications, scheduleDailyNotifications } from '@/services/notifications';

export default function NotificationsScreen() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [propertyAlerts, setPropertyAlerts] = useState(true);
  const [priceDrops, setPriceDrops] = useState(true);
  const [newListings, setNewListings] = useState(false);
  const [dailyReminders, setDailyReminders] = useState(false);

  const handleToggleNotifications = async (value: boolean) => {
    try {
      if (value) {
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
      } else {
        // Disable notifications
        await cancelAllNotifications();
        setNotificationsEnabled(false);
        Alert.alert('Disabled', 'Daily notifications have been turned off');
      }
    } catch (error) {
      console.error('Notification toggle error:', error);
      Alert.alert('Error', 'Failed to toggle notifications');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background" edges={['top']}>
      {/* Custom Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-light-subtext/20 dark:border-dark-subtext/20">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} className="text-light-text dark:text-dark-text" />
        </TouchableOpacity>
        <Text className="text-xl font-heading text-light-text dark:text-dark-text">
          Notifications
        </Text>
      </View>

      <ScrollView className="flex-1" contentContainerClassName="px-5 py-6">
        {/* Master Toggle */}
        <View className="bg-light-surface dark:bg-dark-surface rounded-xl p-4 mb-6">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-lg font-bodyMedium text-light-text dark:text-dark-text">
                Enable Notifications
              </Text>
              <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-1">
                Receive updates about properties and alerts
              </Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={handleToggleNotifications}
              trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
              thumbColor={notificationsEnabled ? '#FFFFFF' : '#F3F4F6'}
            />
          </View>
        </View>

        {/* Notification Types */}
        <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text mb-3">
          Notification Types
        </Text>

        <View className="bg-light-surface dark:bg-dark-surface rounded-xl overflow-hidden">
          {/* Property Alerts */}
          <View className="flex-row items-center justify-between p-4 border-b border-light-subtext/10 dark:border-dark-subtext/10">
            <View className="flex-1">
              <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
                Property Alerts
              </Text>
              <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-1">
                Updates on saved properties
              </Text>
            </View>
            <Switch
              value={propertyAlerts}
              onValueChange={setPropertyAlerts}
              trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
              thumbColor={propertyAlerts ? '#FFFFFF' : '#F3F4F6'}
              disabled={!notificationsEnabled}
            />
          </View>

          {/* Price Drops */}
          <View className="flex-row items-center justify-between p-4 border-b border-light-subtext/10 dark:border-dark-subtext/10">
            <View className="flex-1">
              <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
                Price Drops
              </Text>
              <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-1">
                Get notified when prices decrease
              </Text>
            </View>
            <Switch
              value={priceDrops}
              onValueChange={setPriceDrops}
              trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
              thumbColor={priceDrops ? '#FFFFFF' : '#F3F4F6'}
              disabled={!notificationsEnabled}
            />
          </View>

          {/* New Listings */}
          <View className="flex-row items-center justify-between p-4 border-b border-light-subtext/10 dark:border-dark-subtext/10">
            <View className="flex-1">
              <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
                New Listings
              </Text>
              <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-1">
                Alerts for new properties in your area
              </Text>
            </View>
            <Switch
              value={newListings}
              onValueChange={setNewListings}
              trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
              thumbColor={newListings ? '#FFFFFF' : '#F3F4F6'}
              disabled={!notificationsEnabled}
            />
          </View>

          {/* Daily Reminders */}
          <View className="flex-row items-center justify-between p-4">
            <View className="flex-1">
              <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
                Daily Reminders
              </Text>
              <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-1">
                Morning and evening property updates
              </Text>
            </View>
            <Switch
              value={dailyReminders}
              onValueChange={setDailyReminders}
              trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
              thumbColor={dailyReminders ? '#FFFFFF' : '#F3F4F6'}
              disabled={!notificationsEnabled}
            />
          </View>
        </View>

        {/* Info Section */}
        <View className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <View className="flex-row items-start gap-3">
            <Ionicons name="information-circle" size={20} color="#3B82F6" />
            <Text className="flex-1 text-sm font-body text-light-subtext dark:text-dark-subtext">
              You can manage notification permissions in your device settings. Make sure notifications are enabled for XeroEstate.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
