// app/(main)/_layout.tsx
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#006241",
        tabBarInactiveTintColor: "#888",
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "index") iconName = "home";
          else if (route.name === "cart") iconName = "cart";
          else if (route.name === "payment") iconName = "card";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Only these three are tabs */}
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="cart" options={{ title: "Cart" }} />
      <Tabs.Screen name="payment" options={{ title: "Payment" }} />
    </Tabs>
  );
}
