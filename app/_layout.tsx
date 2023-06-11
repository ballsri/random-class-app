import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import IconDelete from "../components/icon/IconDelete";
import IconEdit from "../components/icon/IconEdit";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="folder/add/index"
            options={{
              presentation: "modal",
              title: "Add Folder",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: Colors[colorScheme ?? "light"].tint,
              },
            }}
          />
          <Stack.Screen
            name="folder/delete/index"
            options={{
              presentation: "modal",
              title: "Select to delete folder",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: Colors[colorScheme ?? "light"].tint,
              },
              headerRight: () => (
                <>
                  <IconDelete
                    style={{
                      backgroundColor: Colors[colorScheme ?? "light"].tint,
                    }}
                  />
                </>
              ),
            }}
          />
          
        </Stack>
      </ThemeProvider>
    </>
  );
}
