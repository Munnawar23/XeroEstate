import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PrivacyScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background" edges={['top']}>
      {/* Custom Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-light-subtext/20 dark:border-dark-subtext/20">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} className="text-light-text dark:text-dark-text" />
        </TouchableOpacity>
        <Text className="text-xl font-heading text-light-text dark:text-dark-text">
          Privacy Policy
        </Text>
      </View>

      <ScrollView className="flex-1 px-5 py-6">
        <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mb-6">
          Last updated: January 5, 2026
        </Text>

        {/* Section 1 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          1. Information We Collect
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          XeroEstate collects minimal personal information to provide our services. This includes your name, email address, and profile picture (if provided). All data, including your favourite properties and preferences, is stored securely in our database.
        </Text>

        {/* Section 2 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          2. How We Use Your Information
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-4 leading-6">
          We use the collected information to:
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-2 leading-6">
          • Provide and maintain our service
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-2 leading-6">
          • Personalize your experience
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-2 leading-6">
          • Save your favorite properties
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          • Send you notifications (if enabled)
        </Text>

        {/* Section 3 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          3. Data Storage
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-4 leading-6">
          Your data is stored securely using Appwrite, a secure backend-as-a-service platform. The app stores the following data:
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-2 leading-6">
          • Your account information (name, email)
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-2 leading-6">
          • Your favourite properties
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-2 leading-6">
          • Your profile picture (optional)
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          • Your app preferences and settings
        </Text>

        {/* Section 4 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          4. Data Sharing
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          We do not sell, trade, or otherwise transfer your personal information to third parties. Property listings and images are provided by third-party sources and may be subject to their own privacy policies.
        </Text>

        {/* Section 5 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          5. Notifications
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          If you enable notifications, we may send you updates about properties and app features. You can disable notifications at any time from the Profile settings. We use your device's notification system and do not collect additional data for this purpose.
        </Text>

        {/* Section 6 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          6. Your Rights
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-4 leading-6">
          You have the right to:
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-2 leading-6">
          • Access your personal data
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-2 leading-6">
          • Update or correct your information
        </Text>

        {/* Section 7 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          7. Security
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </Text>

        {/* Section 8 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          8. Children's Privacy
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          XeroEstate is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13.
        </Text>

        {/* Section 9 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          9. Changes to Privacy Policy
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </Text>

        {/* Section 10 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          10. Contact Us
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-8 leading-6">
          If you have any questions about this Privacy Policy, please contact us at munawwarh48@gmail.com
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
