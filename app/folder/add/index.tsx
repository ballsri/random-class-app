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
import { Text, View, ItemData, Item } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
const data: ItemData[] = [
  {
    id: 1,
    name: "Folder 1",
  },
  {
    id: 2,
    name: "Folder 2",
  },
  {
    id: 3,
    name: "Folder 3",
  },
];
export default function AddFolderScreen() {
  // use in each folder
  // const data: FolderData = {
  //   id: 3,
  //   name: "Folder 3",
  //   items: [
  //     {
  //       img: "https://picsum.photos/200/300",
  //       name: "Item 1",
  //     },
  //     {
  //       img: "https://picsum.photos/200/300",
  //       name: "Item 2",
  //     },
  //   ]
  // };

  const colorScheme = useColorScheme();
  const [name, setname] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputName}>Folder's Name : </Text>
        <TextInput style={styles.input} onChangeText={setname} value={name} />
      </View>
      <View style={styles.button}>
        <Button
          title="Add Folder"
          onPress={() => {
            console.log("Add Folder");
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
  button: {
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
    fontFamily: "arial",
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
