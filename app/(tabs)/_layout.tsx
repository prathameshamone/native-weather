import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext"

export default function TabLayout() {
    const { darkMode } = useTheme();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                sceneStyle: {
                    backgroundColor: darkMode ? "black" : "white",
                    borderTopWidth: 5,
                    height: 70,
                },

                tabBarStyle: {
                    backgroundColor: darkMode ? "black" : "white",
                    borderTopWidth: 0,
                    height: 70,
                },

                tabBarActiveTintColor: darkMode ? "#EAE0CF" : "#373C40",
                tabBarInactiveTintColor: darkMode
                    ? "#8A8FA3"
                    : "#A0A0A0",
                // tabBarInactiveTintColor: "#8A8FA3",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="settings"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}