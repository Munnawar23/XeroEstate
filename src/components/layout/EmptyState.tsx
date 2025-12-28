import LottieView from "lottie-react-native";
import React from "react";
import { Text, View } from "react-native";

interface EmptyStateProps {
  title?: string;
  message?: string;
}

const EmptyState = ({
  title = "No properties found",
  message = "Try adjusting your filters",
}: EmptyStateProps) => {
  return (
    <View className="flex-1 items-center justify-center">
      <LottieView
        source={require("@/assets/animations/empty.json")}
        autoPlay
        loop
        style={{ width: 200, height: 200, }}
      />
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
