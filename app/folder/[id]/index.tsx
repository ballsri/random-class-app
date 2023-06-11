import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, Image } from "react-native";
import { FolderData, FolderItem } from "../../../components/Themed";
const data: FolderData = {
  id: 1,
  name: "Folder1",
  items: [
    {
      id: 1,
      img: "https://picsum.photos/200/300",
      name: "Item 1",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300",
      name: "Item 2",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/300",
      name: "Item 3",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/300",
      name: "Item 4",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/300",
      name: "Item 5",
    },
  ],
};

const windowWidth = Dimensions.get("window").width;
var numColumns;
if (windowWidth > 700) {
    numColumns = 3;
} else {
    numColumns = 2;
}
const itemWidth = windowWidth / numColumns;
export default function FolderScreen() {
  const renderItem = ({ item }: { item: FolderItem }) => {
    return (
        <View style={styles.dataContainer}>
        <Image source={{ uri: item.img }} style={styles.image} />
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.dataList}>
        <FlatList
          data={data.items}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          numColumns={numColumns}
        />
      </View>
      <View style={styles.generateContainer}></View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  dataList: {
    flex: 1,
    flexDirection: "column",
    margin: 1,
  },

  dataContainer: {
    // backgroundColor: "#f9c2ff",
    // padding: 20,
    marginVertical: 4,
    marginHorizontal: 4,
    width: itemWidth,
    alignItems: "center",
    justifyContent: "center",
    },
    image: {
        width: 200,
        height: 200,
    },

  generateContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
});
