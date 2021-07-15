import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import GlobalStyles from "../../style/globalStyle";
import { SideBar, Footer, Header, SideBar2 } from "../../components";
import { SearchPatient } from "../../components";
import ModalSelector from "react-native-modal-selector-searchable";

import * as Colors from "../../style/color";

import DropDownImg from "../../assets/dropDown.png";
import MedicineImg from "../../assets/medicine_blue.png";

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

const patient = {
  chartNumber: null,
  createdAt: "2021-06-15T01:00:53.635Z",
  deletedAt: null,
  dob: "1978-01-13",
  docter: null,
  gender: "Female",
  id: "97119",
  name: "Dennis, Andrea",
  phone: "905-",
  rosterStatus: null,
  status: "AC",
  updatedAt: "2021-06-15T01:00:53.635Z",
};

export default function Prescription() {
  const navigation = useNavigation();

  const [drugName, setDrugName] = useState("");

  // const patient = useSelector((state) => state.patient.patient);

  const prescriptionData = useSelector((state) => state.prescription.data);

  console.log("patient>>>>", patient);
  console.log("prescription data>>>>>", prescriptionData);

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.sidebar}>
        <SideBar2 />
      </View>
      <View style={GlobalStyles.mainContainer}>
        <View style={GlobalStyles.content}>
          <Header />
          {patient === null ? (
            <SearchPatient />
          ) : (
            <View style={styles.container}>
              <View style={styles.drugsContainer}>
                <Text
                  style={[
                    GlobalStyles.font24,
                    GlobalStyles.defaultFontFamily,
                    GlobalStyles.fontBold,
                  ]}
                >
                  What drug would you like to prescribe ?
                </Text>
                {!prescriptionData?.drugs && (
                  <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    cancelText="Cancel"
                    cancelTextStyle={GlobalStyles.font20}
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
                          marginTop: 15,
                          paddingHorizontal: 15,
                          height: 60,
                          borderRadius: 10,
                          display: "flex",
                          flexDirection: "row",
                          width: "80%",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: "white",
                        },
                      ]}
                      placeholder="Search Drug..."
                      value={drugName}
                    >
                      <View style={GlobalStyles.rowContainer}>
                        <Image source={MedicineImg} width={25} height={20} />
                        <Text
                          style={[
                            GlobalStyles.font20,
                            GlobalStyles.fontBold,
                            GlobalStyles.defaultFontFamily,
                            { marginLeft: 10, color: Colors.primatyBlue },
                          ]}
                        >
                          {drugName}
                        </Text>
                      </View>
                      <Image source={DropDownImg} width={25} height={20} />
                    </TouchableOpacity>
                  </ModalSelector>
                )}
              </View>
              <View style={styles.drugsContainer}>
                <Text
                  style={[
                    GlobalStyles.font24,
                    GlobalStyles.defaultFontFamily,
                    GlobalStyles.fontBold,
                  ]}
                >
                  Prescription details for{" "}
                  {prescriptionData?.drugs?.[0].genericName}
                </Text>
                <Text
                  style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}
                >
                  Duration, quantity, refills and additional instructions
                </Text>
                {!prescriptionData?.drugs && <View></View>}
                <Text
                  style={[
                    GlobalStyles.font20,
                    GlobalStyles.defaultFontFamily,
                    GlobalStyles.fontBold,
                    { color: Colors.primatyBlue, marginTop: 15 },
                  ]}
                >
                  Take 2 tablets every 3 hours for 4 days
                </Text>
              </View>
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("PrescriptionSummary")}
        >
          <Text>Go to Summary</Text>
        </TouchableOpacity>
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
    display: "flex",
    justifyContent: "flex-end",
    padding: 30,
  },
  drugsContainer: {
    marginBottom: 50,
  },
});
