import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface EmptyStateProps {
  icon?: keyof typeof Ionicons.glyphMap;
  title?: string;
  message?: string;
}

const EmptyState = ({
  icon = "home-outline",
  title = "No properties found",
  message = "Try adjusting your filters",
}: EmptyStateProps) => {
  return (
    <View className="flex-1 items-center justify-center py-20">
      <Ionicons name={icon} size={64} color="#94A3B8" />
      <Text className="text-lg font-bodyMedium text-light-subtext dark:text-dark-subtext mt-4">
        {title}
      </Text>
      {message && (
        <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-2 text-center px-10">
          {message}
        </Text>
      )}
    </View>
  );
};

export default EmptyState;
