import React from "react";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";

export default function IconAdd( style: any) {
  const colorScheme = useColorScheme();
  return (
    <Pressable>
      {({ pressed }) => (
        <AntDesign
          name="plus"
          size={25}
          color={Colors[colorScheme ?? "light"].text}
          style={[{ marginRight: 15, opacity: pressed ? 0.5 : 1 }, style]}
        />
      )}
    </Pressable>
  );
}
