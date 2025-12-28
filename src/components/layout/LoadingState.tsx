import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LoadingStateProps {
  message?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = 'Loading properties...' 
}) => {
  return (
    <SafeAreaView className="h-full bg-light-background dark:bg-dark-background">
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" className="text-light-primary dark:text-dark-primary" />
        <Text className="text-base font-bodyMedium text-light-subtext dark:text-dark-subtext mt-4">
          {message}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoadingState;
