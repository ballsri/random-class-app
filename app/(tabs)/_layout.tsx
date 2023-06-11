import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinkContainer } from "../../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import IconDelete from "../../components/icon/IconDelete";
import IconEdit from "../../components/icon/IconEdit";

import Colors from "../../constants/Colors";
import IconAdd from "../../components/icon/IconAdd";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Folders",
          tabBarIcon: ({ color }) => <TabBarIcon name="th" color={color} />,
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
              <Link href="/folder/add">
                <IconAdd />
              </Link>
              <Link href="/folder/delete">
                <IconDelete />
              </Link>
            </LinkContainer>
          ),
        }}
      />
    </Tabs>
  );
}
