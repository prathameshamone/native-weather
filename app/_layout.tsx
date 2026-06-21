import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </GestureHandlerRootView>
    </ThemeProvider>
  );
}