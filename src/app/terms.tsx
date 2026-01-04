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

export default function TermsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background" edges={['top']}>
      {/* Custom Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-light-subtext/20 dark:border-dark-subtext/20">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} className="text-light-text dark:text-dark-text" />
        </TouchableOpacity>
        <Text className="text-xl font-heading text-light-text dark:text-dark-text">
          Terms & Conditions
        </Text>
      </View>

      <ScrollView className="flex-1 px-5 py-6">
        <Text className="text-sm font-body text-light-subtext dark:text-dark-subtext mb-6">
          Last updated: January 5, 2026
        </Text>

        {/* Section 1 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          1. Acceptance of Terms
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          By accessing and using XeroEstate, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use this application.
        </Text>

        {/* Section 2 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          2. Use of Service
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          XeroEstate provides a platform for browsing and discovering real estate properties. You agree to use the service only for lawful purposes and in accordance with these Terms & Conditions.
        </Text>

        {/* Section 3 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          3. User Accounts
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
        </Text>

        {/* Section 4 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          4. Property Listings
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          Property information is provided by third-party sources. While we strive to ensure accuracy, we do not guarantee the completeness or accuracy of property listings. Users should verify all information independently before making any decisions.
        </Text>

        {/* Section 5 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          5. Intellectual Property
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          All content, features, and functionality of XeroEstate are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
        </Text>

        {/* Section 6 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          6. Limitation of Liability
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          XeroEstate shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
        </Text>

        {/* Section 7 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          7. Changes to Terms
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-6 leading-6">
          We reserve the right to modify these terms at any time. We will notify users of any material changes. Your continued use of the service after such modifications constitutes acceptance of the updated terms.
        </Text>

        {/* Section 8 */}
        <Text className="text-lg font-heading text-light-text dark:text-dark-text mb-3">
          8. Contact Information
        </Text>
        <Text className="text-base font-body text-light-text dark:text-dark-text mb-8 leading-6">
          If you have any questions about these Terms & Conditions, please contact us at munawwarh48@gmail.com
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
