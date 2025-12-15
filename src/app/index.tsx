import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-light-background dark:bg-dark-background px-6 pt-12">
      {/* Title */}
      <Text className="text-3xl font-heading mb-2 text-light-text dark:text-dark-text">
        Design System Test
      </Text>
      <Text className="text-base font-body mb-6 text-light-subtext dark:text-dark-subtext">
        Colors & Fonts Preview
      </Text>

      {/* Fonts */}
      <View className="mb-8 bg-light-surface dark:bg-dark-surface rounded-2xl p-5">
        <Text className="text-xl font-heading mb-4 text-light-text dark:text-dark-text">
          Fonts
        </Text>

        <Text className="text-lg font-heading mb-2 text-light-text dark:text-dark-text">
          Heading – Poppins
        </Text>

        <Text className="text-base font-body mb-2 text-light-text dark:text-dark-text">
          Body – Source Sans 3 Regular
        </Text>

        <Text className="text-base font-bodyMedium mb-2 text-light-text dark:text-dark-text">
          Body Medium – Source Sans 3 Semibold
        </Text>

        <Text className="text-base font-accent text-light-accent dark:text-dark-accent">
          Accent – Manrope Medium
        </Text>
      </View>

      {/* Colors */}
      <View className="mb-8">
        <Text className="text-xl font-heading mb-4 text-light-text dark:text-dark-text">
          Colors
        </Text>

        {/* Primary */}
        <View className="mb-4 rounded-2xl bg-light-primary dark:bg-dark-primary p-4">
          <Text className="font-bodyMedium text-white">
            Primary
          </Text>
        </View>

        {/* Accent */}
        <View className="mb-4 rounded-2xl bg-light-accent dark:bg-dark-accent p-4">
          <Text className="font-bodyMedium text-white">
            Accent
          </Text>
        </View>

        {/* Surface */}
        <View className="mb-4 rounded-2xl bg-light-surface dark:bg-dark-surface p-4">
          <Text className="font-body text-light-text dark:text-dark-text">
            Surface / Card
          </Text>
          <Text className="font-body text-light-subtext dark:text-dark-subtext">
            Used for property cards
          </Text>
        </View>

        {/* Text */}
        <View className="mb-4">
          <Text className="font-body text-light-text dark:text-dark-text">
            Main Text
          </Text>
          <Text className="font-body text-light-subtext dark:text-dark-subtext">
            Sub Text
          </Text>
        </View>
      </View>

      {/* Status */}
      <View className="items-center mb-10">
        <Text className="text-lg font-accent text-light-primary dark:text-dark-primary">
          ✅ NativeWind + Fonts + Colors Working
        </Text>
      </View>
    </ScrollView>
  );
}
