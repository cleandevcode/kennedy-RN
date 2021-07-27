import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import GlobalStyles from "../../style/globalStyle";
import { SideBar2, Footer, SideBar, Header, CartCard } from "../../components";
import LogoImg from "../../assets/new_logo.png";
import * as Colors from "../../style/color";
import { ScrollView } from "react-native-gesture-handler";

export default function Cart() {
  // const prescriptionData = useSelector(
  //   (state) => state.prescription.prescription
  // );

  const prescriptionData = [
    {
      brandName: "test",
      quanaity: "45",
      repeats: 5,
    },
    {
      brandName: "test",
      quanaity: "45",
      repeats: 5,
    },
    {
      brandName: "test",
      quanaity: "45",
      repeats: 5,
    },
    {
      brandName: "test",
      quanaity: "45",
      repeats: 5,
    },
    {
      brandName: "test",
      quanaity: "45",
      repeats: 5,
    },
    {
      brandName: "test",
      quanaity: "45",
      repeats: 5,
    },
  ];
  const patient = useSelector((state) => state.patient.patient);

  console.log(">>>>>", prescriptionData);

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
                style={{ marginHorizontal: 15, width: 100, height: 100 }}
              />
              <View style={styles.doctorContainer}>
                <Text
                  style={[
                    GlobalStyles.font14,
                    GlobalStyles.fontBold,
                    GlobalStyles.defaultFontFamily,
                  ]}
                >
                  Dr. Test Test
                </Text>
                <Text
                  style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}
                >
                  4a Kennedy Rd S
                </Text>
                <Text
                  style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}
                >
                  Brampton, ON L6W 3E1
                </Text>
                <Text
                  style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}
                >
                  Tel: (905) 459-4385
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 10,
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
                    GlobalStyles.font14,
                    GlobalStyles.fontBold,
                    GlobalStyles.defaultFontFamily,
                  ]}
                >
                  {patient?.firstName} {patient?.lastName}
                </Text>
                <Text
                  style={[
                    GlobalStyles.font14,
                    GlobalStyles.fontBold,
                    GlobalStyles.defaultFontFamily,
                  ]}
                >
                  Written Date: July 14th 2021
                </Text>
              </View>

              <Text
                style={[GlobalStyles.font12, GlobalStyles.defaultFontFamily]}
              >
                {patient?.address?.address} {patient?.address?.city}{" "}
                {patient?.address?.province}
              </Text>
              <Text
                style={[GlobalStyles.font12, GlobalStyles.defaultFontFamily]}
              >
                Phone: {patient?.phone}
              </Text>
              <Text
                style={[
                  GlobalStyles.font16,
                  GlobalStyles.fontBold,
                  GlobalStyles.defaultFontFamily,
                ]}
              >
                Health Insurance: 2349-2342
              </Text>
            </View>
            <ScrollView>
              {prescriptionData &&
                prescriptionData.map((item, idx) => (
                  <CartCard key={idx} item={item} />
                ))}
            </ScrollView>
            <View
              style={[
                GlobalStyles.rowContainer,
                { justifyContent: "space-between", padding: 20 },
              ]}
            >
              <View style={GlobalStyles.rowContainer}>
                <Text
                  style={[
                    GlobalStyles.font14,
                    GlobalStyles.fontBold,
                    GlobalStyles.defaultFontFamily,
                  ]}
                >
                  Requesting:
                </Text>
                <Text
                  style={[
                    GlobalStyles.font14,
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
                      GlobalStyles.font12,
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
                    { backgroundColor: "#000", marginLeft: 10 },
                  ]}
                >
                  <Text style={GlobalStyles.character}>S</Text>
                  <Text
                    style={
                      (GlobalStyles.font12,
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
    marginVertical: 5,
    marginHorizontal: 20,
    borderWidth: 1,
  },
  logoContainer: {
    borderBottomWidth: 1,
  },
  doctorContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderLeftWidth: 1,
    height: "100%",
  },
});
