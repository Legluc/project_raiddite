import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const LIGHT_COLORS = {
  background: "#f7f9f3",
  border: "#000000",
  card: "#ffffff",
  notification: "#ef4444",
  primary: "#4f46e5",
  text: "#000000",
};

const DARK_COLORS = {
  background: "#000000",
  border: "#545454",
  card: "#1a212b",
  notification: "#f87171",
  primary: "#818cf8",
  text: "#ffffff",
};

export const NAV_THEME = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...LIGHT_COLORS,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...DARK_COLORS,
    },
  },
} as const;
