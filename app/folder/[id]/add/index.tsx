import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Button,
  useColorScheme,
  TextInput,
} from "react-native";
import { Link, Tabs } from "expo-router";
import { Text, View, ItemData, Item } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
export default function AddItemScreen() {

  const colorScheme = useColorScheme();
  const [name, setname] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputName}>Item's Name : </Text>
        <TextInput style={styles.input} onChangeText={setname} value={name} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Add Item"
          onPress={() => {
            console.log("Add Item");
          }}
          color={Colors[colorScheme ?? "light"].addFolder}
          accessibilityLabel="Learn more about this purple button"
        ></Button>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    width: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    padding: 10,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputName: {
    fontSize: 25,
    fontFamily: "SpaceMono",
    fontWeight: "100",
  },

  input: {
    height: 40,
    margin: 12,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
});
