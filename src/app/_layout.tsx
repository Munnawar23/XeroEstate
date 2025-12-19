import { AuthProvider } from "@/context/AuthContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import "../../global.css";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "SourceSans3-Regular": require("../assets/fonts/SourceSans3-Regular.ttf"),
    "SourceSans3-SemiBold": require("../assets/fonts/SourceSans3-SemiBold.ttf"),
    "Manrope-Medium": require("../assets/fonts/Manrope-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </AuthProvider>
  );
}
