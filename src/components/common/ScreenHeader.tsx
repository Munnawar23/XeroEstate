import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
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
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <View className="flex flex-row items-center px-5 py-4 border-b border-light-border dark:border-dark-border">
      {showBackButton && (
        <TouchableOpacity
          onPress={handleBackPress}
          className="mr-3 size-11 items-center justify-center rounded-full bg-light-surface dark:bg-dark-surface shadow-sm"
        >
          <Ionicons
            name="arrow-back"
            size={20}
            color={isDark ? "#D1D5DB" : "#374151"}
          />
        </TouchableOpacity>
      )}

      <Text className="flex-1 text-xl font-heading text-light-text dark:text-dark-text">
        {title}
      </Text>
    </View>
  );
};

export default ScreenHeader;
