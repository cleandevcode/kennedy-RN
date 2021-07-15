import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GlobalStyles from "../../style/globalStyle";
import { SideBar2, Footer, SideBar } from "../../components";

export default function History() {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.sidebar}>
        <SideBar2 />
      </View>
      <View style={GlobalStyles.mainContainer}>
        <View style={GlobalStyles.content}>
          <View style={styles.container}>
            <Text>History page</Text>
          </View>
        </View>
        <View style={GlobalStyles.inputContent}>
          <Footer />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
