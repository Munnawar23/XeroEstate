import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import {
  cancelAllNotifications,
  scheduleDailyNotifications,
} from "@/services/notifications";

export default function ProfileScreen() {
  const { user, logout, refetchUser } = useAuth();
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleLogout = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    try {
      await logout();
      Toast.show({
        type: "success",
        text1: "Logged out successfully",
        text2: "See you soon! 👋",
        position: "top",
        visibilityTime: 2000,
      });
      router.replace("/(auth)/login");
    } catch (error) {
      console.error("Logout error:", error);
      Toast.show({
        type: "error",
        text1: "Logout failed",
        text2: "Please try again",
        position: "top",
        visibilityTime: 2000,
      });
    }
  };

  const pickImage = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert(
          "Permission Required",
          "Please allow access to your photo library to change your profile picture."
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        const asset = result.assets[0];
        Alert.alert(
          "Uploading",
          "Please wait while we upload your profile picture..."
        );

        const { uploadAvatar, updateUserAvatar } =
          await import("@/services/avatar");
        const { appwriteConfig } = await import("@/config/appwrite");

        const file = {
          uri: asset.uri,
          name: `avatar-${Date.now()}.jpg`,
          type: "image/jpeg",
        };

        const avatarUrl = await uploadAvatar(file, appwriteConfig.bucketId);
        const success = await updateUserAvatar(avatarUrl);

        if (success) {
          Alert.alert("Success", "Profile picture updated successfully!");
          await refetchUser();
        } else {
          Alert.alert("Error", "Failed to update profile picture");
        }
      }
    } catch (error) {
      console.error("Image picker error:", error);
      Alert.alert("Error", "Failed to upload image. Please try again.");
    }
  };

  const handleSupport = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Linking.openURL("mailto:munawwarh48@gmail.com");
  };

  const handleToggleNotifications = async (value: boolean) => {
    try {
      if (value) {
        const success = await scheduleDailyNotifications();
        if (success) {
          setNotificationsEnabled(true);
          Toast.show({
            type: "success",
            text1: "Notifications Enabled! 🔔",
            text2: "You will receive daily property updates",
            position: "top",
            visibilityTime: 3000,
          });
        } else {
          Toast.show({
            type: "error",
            text1: "Failed to enable notifications",
            text2: "Please check permissions",
            position: "top",
            visibilityTime: 2000,
          });
        }
      } else {
        await cancelAllNotifications();
        setNotificationsEnabled(false);
        Toast.show({
          type: "info",
          text1: "Notifications Disabled",
          text2: "You won't receive updates",
          position: "top",
          visibilityTime: 2000,
        });
      }
    } catch (error) {
      console.error("Notification toggle error:", error);
      Toast.show({
        type: "error",
        text1: "Failed to toggle notifications",
        text2: "Please try again",
        position: "top",
        visibilityTime: 2000,
      });
    }
  };

  const handleTermsPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/terms" as any);
  };

  const handlePrivacyPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/privacy" as any);
  };

  const handleAboutPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/about" as any);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <SafeAreaView
      className="h-full  bg-light-background dark:bg-dark-background"
      edges={["top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-26 px-5"
      >
        {/* Header */}
        <View className="flex flex-row items-center justify-between mb-5">
          <Text className="text-2xl font-heading text-light-text dark:text-dark-text">
            Profile
          </Text>
        </View>

        {/* User Profile Section */}
        <View className="flex flex-row justify-center mb-8">
          <View className="flex flex-col items-center">
            <View className="relative">
              <View className="size-32 rounded-full bg-light-primary dark:bg-dark-primary items-center justify-center overflow-hidden">
                {user?.avatar &&
                (user.avatar.startsWith("file://") ||
                  user.avatar.startsWith("http")) ? (
                  <Image
                    source={{ uri: user.avatar }}
                    className="size-full"
                    resizeMode="cover"
                  />
                ) : (
                  <Text className="text-4xl font-heading text-white">
                    {user?.name ? getInitials(user.name) : "U"}
                  </Text>
                )}
              </View>

              <TouchableOpacity
                onPress={pickImage}
                className="absolute bottom-0 right-0 bg-light-primary dark:bg-dark-primary rounded-full p-2.5 shadow-lg border-2 border-light-background dark:border-dark-background"
                activeOpacity={0.7}
              >
                <Ionicons name="pencil" size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <Text className="text-xl font-heading mt-3 text-light-text dark:text-dark-text">
              {user?.name || "User"}
            </Text>
          </View>
        </View>

        {/* NOTIFICATIONS Section */}
        <Text className="text-xs font-bodyMedium text-light-subtext dark:text-dark-subtext mb-3 uppercase tracking-wider">
          Notifications
        </Text>

        <View className="bg-light-surface dark:bg-dark-surface rounded-2xl p-4 mb-6">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center flex-1">
              <View className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 items-center justify-center mr-3">
                <Ionicons name="notifications" size={24} color="#3B82F6" />
              </View>
              <View className="flex-1">
                <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
                  Push Notifications
                </Text>
                <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-0.5">
                  {notificationsEnabled ? "Enabled" : "Disabled"}
                </Text>
              </View>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={handleToggleNotifications}
              trackColor={{ false: "#D1D5DB", true: "#3B82F6" }}
              thumbColor={notificationsEnabled ? "#FFFFFF" : "#F3F4F6"}
            />
          </View>
        </View>

        {/* SUPPORT Section */}
        <Text className="text-xs font-bodyMedium text-light-subtext dark:text-dark-subtext mb-3 uppercase tracking-wider">
          Support
        </Text>

        <View className="bg-light-surface dark:bg-dark-surface rounded-2xl p-4 mb-6">
          <TouchableOpacity
            onPress={handleSupport}
            className="flex-row items-center"
          >
            <View className="size-12 rounded-full bg-orange-100 dark:bg-orange-900/30 items-center justify-center mr-3">
              <Ionicons name="help-circle" size={24} color="#F97316" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
                Help & Support
              </Text>
              <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-0.5">
                Contact us at munawwarh48@gmail.com
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* LEGAL Section */}
        <Text className="text-xs font-bodyMedium text-light-subtext dark:text-dark-subtext mb-3 uppercase tracking-wider">
          Legal
        </Text>

        <View className="bg-light-surface dark:bg-dark-surface rounded-2xl p-4 mb-2">
          <TouchableOpacity
            onPress={handleTermsPress}
            className="flex-row items-center justify-between"
          >
            <View className="flex-row items-center flex-1">
              <View className="size-12 rounded-full bg-gray-100 dark:bg-gray-800 items-center justify-center mr-3">
                <Ionicons name="document-text" size={24} color="#6B7280" />
              </View>
              <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
                Terms & Conditions
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        <View className="bg-light-surface dark:bg-dark-surface rounded-2xl p-4 mb-6">
          <TouchableOpacity
            onPress={handlePrivacyPress}
            className="flex-row items-center justify-between"
          >
            <View className="flex-row items-center flex-1">
              <View className="size-12 rounded-full bg-gray-100 dark:bg-gray-800 items-center justify-center mr-3">
                <Ionicons name="shield-checkmark" size={24} color="#6B7280" />
              </View>
              <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
                Privacy Policy
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* ABOUT Section */}
        <Text className="text-xs font-bodyMedium text-light-subtext dark:text-dark-subtext mb-3 uppercase tracking-wider">
          About
        </Text>

        <View className="bg-light-surface dark:bg-dark-surface rounded-2xl p-4 mb-6">
          <TouchableOpacity
            onPress={handleAboutPress}
            className="flex-row items-center justify-between"
          >
            <View className="flex-row items-center flex-1">
              <View className="size-12 rounded-full bg-gray-100 dark:bg-gray-800 items-center justify-center mr-3">
                <Ionicons name="information-circle" size={24} color="#6B7280" />
              </View>
              <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
                About
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* LOGOUT Section */}
        <Text className="text-xs font-bodyMedium text-light-subtext dark:text-dark-subtext mb-3 mt-6 uppercase tracking-wider">
          Logout
        </Text>

        <View className="bg-light-surface dark:bg-dark-surface rounded-2xl p-4 mb-6">
          <TouchableOpacity
            onPress={handleLogout}
            className="flex-row items-center"
          >
            <View className="size-12 rounded-full bg-red-100 dark:bg-red-900/30 items-center justify-center mr-3">
              <Ionicons name="log-out" size={24} color="#EF4444" />
            </View>
            <Text className="text-base font-bodyMedium text-red-500">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
