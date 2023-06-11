import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Text, View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import IconDelete from "../../../components/icon/IconDelete";
import FolderScreen from "./index";

export default function FolderLayout({ route }) {
  const colorScheme = useColorScheme();
  const params = useLocalSearchParams();
  const id = params.id;

  return (
    <View>
      <Stack.Screen
        options={{
          title: id[0],
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
      <FolderScreen/>
    </View>
  );
}
