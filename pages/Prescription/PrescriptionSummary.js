import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import GlobalStyles from "../../style/globalStyle";
import { SideBar2, Footer, SideBar, Header } from "../../components";
import ModalSelector from "react-native-modal-selector-searchable";
import DropDownImg from "../../assets/dropDown.png";
import * as Colors from "../../style/color";

import { useNavigation } from "@react-navigation/native";

const data = [
  { key: 0, label: "Fruits" },
  { key: 1, label: "Red Apples" },
  { key: 2, label: "Cherries" },
  {
    key: 3,
    label: "Cranberries",
    accessibilityLabel: "Tap here for cranberries",
  },
  // etc...
  // Can also add additional custom keys which are passed to the onChange callback
  { key: 4, label: "Vegetable", customKey: "Not a fruit" },
];

export default function PrescriptionSummary() {
  const [drugName, setDrugName] = useState("Fruits");
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.sidebar}>
        <SideBar2 />
      </View>
      <View style={GlobalStyles.mainContainer}>
        <View style={GlobalStyles.content}>
          <Header />
          <View style={styles.container}>
            <View
              style={[
                GlobalStyles.rowContainer,
                { justifyContent: "space-between" },
              ]}
            >
              <Text
                style={[
                  GlobalStyles.font22,
                  GlobalStyles.fontBold,
                  GlobalStyles.defaultFontFamily,
                ]}
              >
                Summary
              </Text>
              <TouchableOpacity
                style={[
                  GlobalStyles.defaultButton,
                  GlobalStyles.rowContainer,
                  { backgroundColor: Colors.mainBlue },
                ]}
                onPress={() => navigation.navigate("Cart")}
              >
                <Text style={GlobalStyles.character}>C</Text>
                <Text
                  style={[
                    GlobalStyles.font16,
                    GlobalStyles.defaultFontFamily,
                    { color: "white", marginLeft: 10 },
                  ]}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainContainer}>
              <View style={GlobalStyles.rowContainer}>
                <Text
                  style={[
                    GlobalStyles.font16,
                    GlobalStyles.defaultFontFamily,
                    GlobalStyles.fontBold,
                    { marginRight: 15 },
                  ]}
                >
                  Medication:
                </Text>
                <ModalSelector
                  data={data}
                  initValue="Select something yummy!"
                  supportedOrientations={["landscape"]}
                  accessible={true}
                  scrollViewAccessibilityLabel={"Scrollable options"}
                  cancelButtonAccessibilityLabel={"Cancel Button"}
                  cancelText="Cancel"
                  cancelTextStyle={GlobalStyles.font16}
                  onChange={(option) => {
                    setDrugName(option.label);
                  }}
                  optionTextStyle={GlobalStyles.font20}
                  searchTextStyle={GlobalStyles.font20}
                  searchStyle={{ paddingVertical: 10, borderWidth: 0 }}
                >
                  <TouchableOpacity
                    style={[
                      GlobalStyles.defaultFontFamily,
                      {
                        paddingHorizontal: 15,
                        height: 40,
                        borderRadius: 10,
                        display: "flex",
                        flexDirection: "row",
                        width: "30%",
                        justifyContent: "space-between",
                        alignItems: "center",
                      },
                    ]}
                    placeholder="Search Drug..."
                    value={drugName}
                  >
                    <View style={GlobalStyles.rowContainer}>
                      <Text
                        style={[
                          GlobalStyles.font18,
                          GlobalStyles.defaultFontFamily,
                          { marginLeft: 10, color: Colors.primatyBlue },
                        ]}
                      >
                        {drugName}
                      </Text>
                    </View>
                    <Image source={DropDownImg} width={15} height={10} />
                  </TouchableOpacity>
                </ModalSelector>
              </View>
              <View style={GlobalStyles.rowContainer}>
                <Text
                  style={[
                    GlobalStyles.font16,
                    GlobalStyles.defaultFontFamily,
                    GlobalStyles.fontBold,
                    { marginRight: 15 },
                  ]}
                >
                  Duration:
                </Text>
                <TextInput
                  value="90 days"
                  style={[
                    GlobalStyles.font16,
                    GlobalStyles.defaultFontFamily,
                    { color: Colors.primatyBlue },
                  ]}
                />
              </View>
              <View style={GlobalStyles.rowContainer}>
                <View style={[GlobalStyles.rowContainer, { marginRight: 20 }]}>
                  <Text
                    style={[
                      GlobalStyles.font16,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                      { marginRight: 15 },
                    ]}
                  >
                    Quantity:
                  </Text>
                  <TextInput
                    value="2"
                    style={[
                      GlobalStyles.font16,
                      GlobalStyles.defaultFontFamily,
                      { color: Colors.primatyBlue },
                    ]}
                  />
                </View>
                <View style={GlobalStyles.rowContainer}>
                  <Text
                    style={[
                      GlobalStyles.font16,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                      { marginRight: 15 },
                    ]}
                  >
                    Unit:
                  </Text>
                  <TextInput
                    value="Capsules"
                    style={[
                      GlobalStyles.font16,
                      GlobalStyles.defaultFontFamily,
                      { color: Colors.primatyBlue },
                    ]}
                  />
                </View>
              </View>
              <View style={GlobalStyles.rowContainer}>
                <Text
                  style={[
                    GlobalStyles.font16,
                    GlobalStyles.defaultFontFamily,
                    GlobalStyles.fontBold,
                    { marginRight: 15 },
                  ]}
                >
                  Refills:
                </Text>
                <TextInput
                  value="3"
                  style={[
                    GlobalStyles.font16,
                    GlobalStyles.defaultFontFamily,
                    { color: Colors.primatyBlue },
                  ]}
                />
              </View>
              <View style={GlobalStyles.rowContainer}>
                <View style={[GlobalStyles.rowContainer, { marginRight: 20 }]}>
                  <Text
                    style={[
                      GlobalStyles.font16,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                      { marginRight: 15 },
                    ]}
                  >
                    Start Date:
                  </Text>
                  <TextInput
                    value="04/04/21"
                    style={[
                      GlobalStyles.font16,
                      GlobalStyles.defaultFontFamily,
                      { color: Colors.primatyBlue },
                    ]}
                  />
                </View>
                <View style={GlobalStyles.rowContainer}>
                  <Text
                    style={[
                      GlobalStyles.font16,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                      { marginRight: 15 },
                    ]}
                  >
                    End Date:
                  </Text>
                  <TextInput
                    value="04/07/21"
                    style={[
                      GlobalStyles.font16,
                      GlobalStyles.defaultFontFamily,
                      { color: Colors.primatyBlue },
                    ]}
                  />
                </View>
              </View>
              <Text
                style={[
                  GlobalStyles.font16,
                  GlobalStyles.defaultFontFamily,
                  GlobalStyles.fontBold,
                  { marginRight: 15, marginTop: 10 },
                ]}
              >
                Instructions:
              </Text>
              <TextInput
                style={[
                  GlobalStyles.font16,
                  GlobalStyles.defaultFontFamily,
                  {
                    color: Colors.primatyBlue,
                    width: "100%",
                    backgroundColor: Colors.lightGrey,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 5,
                    marginTop: 5,
                  },
                ]}
              />
              <Text
                style={[
                  GlobalStyles.font16,
                  GlobalStyles.defaultFontFamily,
                  GlobalStyles.fontBold,
                  { marginRight: 15, marginTop: 10 },
                ]}
              >
                Notes:
              </Text>
              <TextInput
                multiline={true}
                style={[
                  GlobalStyles.font16,
                  GlobalStyles.defaultFontFamily,
                  {
                    color: Colors.primatyBlue,
                    width: "100%",
                    backgroundColor: Colors.lightGrey,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 5,
                    marginTop: 5,
                    height: 80,
                  },
                ]}
              />
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
    padding: 30,
  },

  mainContainer: {
    padding: 20,
    backgroundColor: "white",
    display: "flex",
    marginTop: 20,
    borderRadius: 10,
  },
});
