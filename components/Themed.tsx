/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  ScrollView as DefaultScrollView,
  TouchableOpacity as DefaultTouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image
} from "react-native";

import Colors from "../constants/Colors";
import { FONT, SIZES } from "../constants/themes";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  className?: string;
};

type TextTypeProps = {
  font?: "regular" | "medium";
  size?: "xSmall" | "small" | "medium" | "large" | "xLarge";
}

export type TextProps = TextTypeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];
export type TouchableOpacityProps = ThemeProps & DefaultTouchableOpacity["props"];

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

export function Text(props: TextProps) {
  const { style, font="regular", size="small", ...otherProps } = props;
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ fontSize: SIZES[size], fontFamily: FONT[font], color: '#1E293B'}, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[ style]} {...otherProps} />;
}

export function Container(props: ScrollViewProps) {
  const { style, lightColor, darkColor, children, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultScrollView
      style={[{ paddingHorizontal: 14, flex: 1 }, style]}
      contentContainerStyle={{
        paddingBottom: 40,
        paddingTop: 30,
        position: 'relative'
      }}
      showsVerticalScrollIndicator={false}
      {...otherProps}
    >
    
          {children}
    </DefaultScrollView>
  );
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultTouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />;
}