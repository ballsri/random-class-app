import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { useColorScheme, Button } from "react-native";
import Colors from "../../../../constants/Colors";

export default function AddItemLayout() {
  const colorScheme = useColorScheme();
  const route = useRouter();
  const params = useLocalSearchParams();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Add Item",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? "light"].tint,
          },
          headerLeft: () => (
            <Button
              onPress={() => {
                route.back();
              }}
              title="Cancel"
              color={Colors[colorScheme ?? "light"].tint}
            />
          ),
        }}
      />
    </Stack>
  );
}
