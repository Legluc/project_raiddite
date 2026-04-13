import "@/global.css";
import { Stack } from "expo-router";
import { PortalHost } from "@rn-primitives/portal";
import { ThemeProvider } from "@react-navigation/native";
import { NAV_THEME } from "../lib/theme";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

export default function RootLayout() {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme("dark");
  }, [setColorScheme]);

  return (
    <ThemeProvider value={NAV_THEME[colorScheme]}>
      <Stack>
        {/* Le groupe (tabs) est un écran dans le Stack */}
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, title: "Feed" }}
        />

        {/* Les écrans hors-tabs */}
        <Stack.Screen name="posts/[id]" options={{ title: "Post" }} />
        <Stack.Screen name="users/[id]" options={{ title: "User" }} />
      </Stack>

      <PortalHost />
    </ThemeProvider>
  );
}
