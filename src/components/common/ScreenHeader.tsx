import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ScreenHeaderProps {
  title: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
}

const ScreenHeader = ({
  title,
  onBackPress,
  showBackButton = true,
}: ScreenHeaderProps) => {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <View className="flex flex-row items-center px-5 py-4 border-b border-light-subtext/10 dark:border-dark-subtext/10">
      {showBackButton && (
        <TouchableOpacity
          onPress={handleBackPress}
          className="flex flex-row bg-light-surface dark:bg-dark-surface rounded-full size-11 items-center justify-center shadow-sm mr-3"
        >
          <Ionicons
            name="arrow-back"
            size={20}
            color={isDark ? "#D4D4D8" : "#18181B"}
          />
        </TouchableOpacity>
      )}

      <Text className="text-xl font-heading text-light-text dark:text-dark-text flex-1">
        {title}
      </Text>
    </View>
  );
};

export default ScreenHeader;
