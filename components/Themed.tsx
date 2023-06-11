/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import Colors from "../constants/Colors";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export function LinkContainer(props: any) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  console.log("LinkContainer", props);
  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export type ItemData = {
  id: number;
  name: string;
};

export type ItemProps = {
  item: ItemData;
  backgroundColor: string;
  textColor: string;
  style?: any;
  onPress?: () => void;
  onLongPress?: () => void;
};
export function Item({
  item,
  onPress,
  onLongPress,
  backgroundColor,
  textColor,
  style,
}: ItemProps) {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
        <Text style={style}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export type FolderItem = {
  id: number;
  img: string;
  name: string;
};

export type FolderData = {
  id: number;
  name: string;
  items: FolderItem[];
};
