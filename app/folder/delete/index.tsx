import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, FlatList, useColorScheme } from "react-native";
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
export default function DeleteFolderScreen() {
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


  const [selectedIds, setSelectedIds] = useState<Number[]>([]);

  useEffect(() => {
    console.log(selectedIds);
    // change style of selected folders

  }, [selectedIds]);

  const selectFolder = (itemId: Number) => {
    if (!(selectedIds.find((id) => id === itemId) as Number)) {
      setSelectedIds([...selectedIds, itemId]);
    } else {
      setSelectedIds(selectedIds.filter((id) => id !== itemId) as Number[]);
    }
  };

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id in selectedIds ? "#6e3b6e" : "#f9c2ff";
    const color = item.id in selectedIds ? "white" : "black";
    return (
      <View>
        <Item
          key={item.id}
          item={item}
          onPress={() => selectFolder(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
          style={
            (selectedIds.find((id) => id === item.id) as Number) ? styles.folderSelect :
            styles.folder
          }
        />
        <View
          style={(selectedIds.find((id) => id === item.id) as Number) ? styles.separator: styles.separatorSelect}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id + index.toString()}
        extraData={selectedIds}
        style={styles.folderList}
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View style={styles.sumDelete}>
        <Text style={styles.sumDeleteText}>
          Selected : {selectedIds.length}
        </Text>
      </View>
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
    backgroundColor: Colors.light.separatorDark,
  },
  separatorSelect: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.light.separatorDarker,
  },
  folderList: {
    width: "100%",
    overflow: "hidden",
    overflowY: "scroll",
  },
  folder: {
    width: "100%",
    // marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  folderSelect: {
    width: "100%",
    // marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: Colors.light.deleteSelected,
    // color: "white",
  },

  sumDelete: {
    width: "100%",
    height: "30%",
    backgroundColor: Colors.light.deleteSummary,
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  sumDeleteText: {
    fontFamily: "SpaceMono",
    fontSize: 25,
  },
});
