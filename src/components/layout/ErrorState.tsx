import Button from "@/components/common/Button";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  retryButtonText?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Failed to load properties",
  message,
  onRetry,
  retryButtonText = "Try Again",
}) => {
  return (
    <View className="h-full bg-light-background dark:bg-dark-background">
      <View className="flex-1 items-center justify-center px-5">
        <Ionicons name="alert-circle-outline" size={64} color="#EF4444" />
        <Text className="text-lg font-bodyMedium text-light-text dark:text-dark-text mt-4 text-center">
          {title}
        </Text>
        <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mt-2 text-center">
          {message}
        </Text>
        {onRetry && (
          <View className="mt-6">
            <Button title={retryButtonText} onPress={onRetry} />
          </View>
        )}
      </View>
    </View>
  );
};

export default ErrorState;
