import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const { bottom } = useSafeAreaInsets();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        // Active / inactive icon & label colors
        tabBarActiveTintColor: isDark ? '#93C5FD' : '#60A5FA',
        tabBarInactiveTintColor: isDark ? '#9CA3AF' : '#6B7280',

        // Tab bar container
        tabBarStyle: {
          backgroundColor: isDark ? '#0F0F10' : '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: isDark ? '#262626' : '#E5E7EB',
          height: bottom > 0 ? 50 + bottom : 60,
          paddingBottom: bottom > 0 ? bottom - 10 : 10,
          paddingTop: 8,
          elevation: 0,
          shadowOpacity: 0,
        },

        // Label typography
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'SourceSans3-SemiBold',
        },
      }}
      screenListeners={{
        tabPress: () => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
