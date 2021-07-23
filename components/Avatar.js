import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GlobalStyles from "../style/globalStyle";
import * as Colors from "../style/color";

export default function Avatar({ letter }) {
  const makeLetter = () => {
    if (letter && letter.length > 0) {
      return letter.substring(0, 2).toUpperCase();
    }
    return "";
  };
  return (
    <View style={styles.container}>
      <Text
        style={[
          GlobalStyles.font20,
          GlobalStyles.defaultFontFamily,
          styles.text,
          {
            color: Colors.mainBlue,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        {makeLetter()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
  },

  text: {},
});
