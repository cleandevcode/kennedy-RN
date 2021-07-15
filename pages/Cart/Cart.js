import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import GlobalStyles from "../../style/globalStyle";
import { SideBar2, Footer, SideBar, Header } from "../../components";
import LogoImg from "../../assets/new_logo.png";
import * as Colors from "../../style/color";

export default function Cart() {
  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.sidebar}>
        <SideBar2 />
      </View>
      <View style={GlobalStyles.mainContainer}>
        <Header />
        <View style={GlobalStyles.content}>
          <View style={styles.container}>
            <View style={[styles.logoContainer, GlobalStyles.rowContainer]}>
              <Image
                source={LogoImg}
                style={{ marginHorizontal: 30, width: 145, height: 150 }}
              />
              <View style={styles.doctorContainer}>
                <Text
                  style={[
                    GlobalStyles.font18,
                    GlobalStyles.fontBold,
                    GlobalStyles.defaultFontFamily,
                  ]}
                >
                  Dr. Test Test
                </Text>
                <Text
                  style={[GlobalStyles.font18, GlobalStyles.defaultFontFamily]}
                >
                  4a Kennedy Rd S
                </Text>
                <Text
                  style={[GlobalStyles.font18, GlobalStyles.defaultFontFamily]}
                >
                  Brampton, ON L6W 3E1
                </Text>
                <Text
                  style={[GlobalStyles.font18, GlobalStyles.defaultFontFamily]}
                >
                  Tel: (905) 459-4385
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                paddingHorizontal: 30,
                paddingVertical: 20,
              }}
            >
              <View
                style={[
                  GlobalStyles.rowContainer,
                  {
                    justifyContent: "space-between",
                  },
                ]}
              >
                <Text
                  style={[
                    GlobalStyles.font18,
                    GlobalStyles.fontBold,
                    GlobalStyles.defaultFontFamily,
                  ]}
                >
                  N/A
                </Text>
                <Text
                  style={[
                    GlobalStyles.font18,
                    GlobalStyles.fontBold,
                    GlobalStyles.defaultFontFamily,
                  ]}
                >
                  Written Date: July 14th 2021
                </Text>
              </View>

              <Text
                style={[GlobalStyles.font16, GlobalStyles.defaultFontFamily]}
              >
                N/A
              </Text>
              <Text
                style={[GlobalStyles.font16, GlobalStyles.defaultFontFamily]}
              >
                Phone: N/A
              </Text>
              <Text
                style={[
                  GlobalStyles.font18,
                  GlobalStyles.fontBold,
                  GlobalStyles.defaultFontFamily,
                ]}
              >
                Health Insurance: 2349-2342
              </Text>
            </View>
            <View
              style={[
                GlobalStyles.rowContainer,
                { justifyContent: "space-between", padding: 30 },
              ]}
            >
              <View style={GlobalStyles.rowContainer}>
                <Text
                  style={[
                    GlobalStyles.font18,
                    GlobalStyles.fontBold,
                    GlobalStyles.defaultFontFamily,
                  ]}
                >
                  Requesting:
                </Text>
                <Text
                  style={[
                    GlobalStyles.font18,
                    GlobalStyles.defaultFontFamily,
                    { marginLeft: 15 },
                  ]}
                >
                  Dr. Test Test
                </Text>
              </View>
              <View style={GlobalStyles.rowContainer}>
                <TouchableOpacity
                  style={[
                    GlobalStyles.defaultButton,
                    GlobalStyles.radius8,
                    GlobalStyles.rowContainer,
                    { backgroundColor: Colors.mainBlue },
                  ]}
                >
                  <Text style={GlobalStyles.character}>A</Text>
                  <Text
                    style={[
                      GlobalStyles.font16,
                      GlobalStyles.defaultFontFamily,
                      { color: "white", marginLeft: 10 },
                    ]}
                  >
                    Add
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    GlobalStyles.defaultButton,
                    GlobalStyles.radius8,
                    GlobalStyles.rowContainer,
                    { backgroundColor: "#000", marginLeft: 15 },
                  ]}
                >
                  <Text style={GlobalStyles.character}>S</Text>
                  <Text
                    style={
                      (GlobalStyles.font16,
                      GlobalStyles.defaultFontFamily,
                      { color: "white", marginLeft: 10 })
                    }
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
    marginVertical: 15,
    marginHorizontal: 30,
    borderWidth: 1,
  },
  logoContainer: {
    borderBottomWidth: 1,
  },
  doctorContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderLeftWidth: 1,
    height: "100%",
  },
});
