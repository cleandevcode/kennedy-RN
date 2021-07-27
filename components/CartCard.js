import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles from "../style/globalStyle";

export default function CartCard({ item }) {
  const { brandName, quanaity, repeats } = item;
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            GlobalStyles.font14,
            GlobalStyles.defaultFontFamily,
            GlobalStyles.fontBold,
            { marginBottom: 3 },
          ]}
        >
          {brandName}
        </Text>
        <Text style={[GlobalStyles.font12, GlobalStyles.defaultFontFamily]}>
          Quantity: {quanaity} Repeats: {repeats}
        </Text>
      </View>
      <View style={GlobalStyles.rowContainer}>
        <TouchableOpacity>
          <Text
            style={[
              GlobalStyles.font12,
              GlobalStyles.defaultFontFamily,
              { marginRight: 10 },
            ]}
          >
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderBottomColor: "#d5d5d5",
    borderBottomWidth: 1,
  },
});
