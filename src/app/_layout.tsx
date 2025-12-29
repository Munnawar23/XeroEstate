import { AuthProvider } from "@/context/AuthContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { requestNotificationPermissions } from "@/services/notifications";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import "../../global.css";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "SourceSans3-Regular": require("../assets/fonts/SourceSans3-Regular.ttf"),
    "SourceSans3-SemiBold": require("../assets/fonts/SourceSans3-SemiBold.ttf"),
    "Manrope-Medium": require("../assets/fonts/Manrope-Medium.ttf"),
  });

  // Request notification permissions on app start
  useEffect(() => {
    requestNotificationPermissions();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <FavoritesProvider>
      <AuthProvider>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <Toast />
      </AuthProvider>
    </FavoritesProvider>
  );
}
