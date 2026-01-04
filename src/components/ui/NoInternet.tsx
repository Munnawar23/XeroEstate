import LottieView from 'lottie-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NoInternet = () => {
  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-dark-background items-center justify-center px-8">
      <View className="w-full max-w-[300px] aspect-square items-center justify-center">
        <LottieView
          source={require('@/assets/animations/internet.json')}
          autoPlay
          loop
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      
      <View className="mt-8 items-center">
        <Text className="text-2xl font-heading text-light-text dark:text-dark-text text-center">
          Oops! No Connection
        </Text>
        <Text className="text-base font-body text-light-subtext dark:text-dark-subtext text-center mt-3">
          Internet required to use this app. Please check your network settings and try again.
        </Text>
      </View>
      
    </SafeAreaView>
  );
};

export default NoInternet;
