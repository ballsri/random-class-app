import { Link, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Text, View, LinkContainer } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import IconDelete from "../../../components/icon/IconDelete";
import FolderScreen from "./index";
import IconAdd from "../../../components/icon/IconAdd";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function FolderLayout({}) {
  const colorScheme = useColorScheme();
  const params = useLocalSearchParams();
  const id = params.id;

  if (!id) {
    return <Text>Folder not found</Text>;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: id[0],
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? "light"].tint,
          },
          headerRight: () => (
            <LinkContainer
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: Colors[colorScheme ?? "light"].tint,
              }}
            >
              <Link href={`${id}/add`}>
                <IconAdd
                  style={{
                    backgroundColor: Colors[colorScheme ?? "light"].tint,
                  }}
                />
              </Link>
              <IconDelete
                style={{
                  backgroundColor: Colors[colorScheme ?? "light"].tint,
                }}
              />
            </LinkContainer>
          ),
        }}
      />

      <Stack.Screen
        name="add"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
