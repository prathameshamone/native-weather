import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                sceneStyle: {
                    backgroundColor: "black",
                },

                tabBarStyle: {
                    backgroundColor: "black", // same dark blue
                    borderTopWidth: 0,
                    height: 70,
                },

                tabBarActiveTintColor: "#E8E1D4", // your cream color
                tabBarInactiveTintColor: "#8A8FA3",
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