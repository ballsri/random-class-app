import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Pressable,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { Link, Tabs } from "expo-router";
import { Text, View, ItemData, Item } from "../../components/Themed";
import Colors from "../../constants/Colors";

type isEditing = {
  editing: Boolean;
  id: Number;
};
export default function TabFoldersScreen() {
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

  const [selectedId, setSelectedId] = useState<Number>(0);
  const [editing, setEditing] = useState<isEditing>({ editing: false, id: 0 });
  const [text, setText] = useState<string>("");

  const startEditing = (id: Number) => {
    setEditing({ editing: true, id: id });
    setText(data.find((item) => item.id === id)?.name as string);
    console.log("start editing");
  };
  const stopEditing = () => {
    // TODO: save changes
    setEditing({ editing: false, id: 0 });
    console.log("stop editing");
  };
  useEffect(() => {
    console.log(selectedId, editing);
  }, [selectedId, editing]);

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <View>
        {editing.id === item.id ? (
          !editing.editing ? (
            <View>
              <Link href={"folder/" + item.id} style={styles.link}>
                <Item
                  item={item}
                  onPress={() => setSelectedId(item.id)}
                  onLongPress={() => startEditing(item.id)}
                  backgroundColor={backgroundColor}
                  textColor={color}
                  style={styles.folder}
                />
              </Link>
              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
            </View>
          ) : (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setText(text)}
                value={text}
                autoFocus={true}
                onBlur={() => stopEditing()}
              />
              <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
              />
            </View>
          )
        ) : (
          <View>
            <Link href={"folder/" + item.id} style={styles.link}>
              <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                onLongPress={() => startEditing(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
                style={styles.folder}
              />
            </Link>
            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id + index.toString()}
          extraData={selectedId}
          style={styles.folderList}
        />
      </View>
    </>
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
    backgroundColor: Colors.light.separatorDarker,
  },
  touchable: {
    width: "100%",
    height: "auto",
    cursor: "pointer",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
  },
  inputContainer: {
    backgroundColor: Colors.light.deleteSelected,
    width: "auto",
  },
  input: {
    fontSize: 14,
    width: "fit-content",
    marginVertical: 10,
    marginLeft: 25,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  folderList: {
    width: "100%",
  },
  folder: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
