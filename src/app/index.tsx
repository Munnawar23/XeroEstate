import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import LottieView from "lottie-react-native";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [appIsReady, setAppIsReady] = useState(false);
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (!appIsReady || loading) return;
    const timer = setTimeout(() => {
      if (user) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/(auth)/login");
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [appIsReady, loading, user, router]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View className="flex-1 bg-light-background dark:bg-dark-background items-center justify-center">
      <LottieView
        ref={animationRef}
        source={require("@/assets/animations/splash.json")}
        autoPlay
        loop={false}
        speed={1.5}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}
