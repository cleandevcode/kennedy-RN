import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
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
import { getDrugsCandidates } from "../../service/base.service";

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

export default function Prescription() {
  const navigation = useNavigation();

  const [drugName, setDrugName] = useState("");
  const [drugs, setDrugs] = useState([]);

  const patient = useSelector((state) => state.patient.patient);

  const prescriptionData = useSelector((state) => state.prescription.data);

  useEffect(() => {
    if (drugName.length > 0) {
      getDrugCandidats();
    }
  }, [drugName]);

  const handleDrugName = (txt) => {
    setDrugName(txt);
  };

  const handleText = (text) => {
    console.log("2222>>>>", text);
  };

  const getDrugCandidats = () => {
    getDrugsCandidates(drugName)
      .then((res) => {
        console.log("1111>>>>", res);
        if (res?.status === 200 && res?.data?.result) {
          setDrugs(res.data.result);
        }
      })
      .catch((err) => {
        console.log("000000000000>>>>>>>>>>>", err);
      });
  };

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
                {/* {!prescriptionData?.drugs && (
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
                )} */}
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
              {drugs && drugs.length > 0 && (
                <ScrollView horizontal={true} style={{ maxHeight: 50 }}>
                  {drugs.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.drugContent}>
                      <Text
                        style={[
                          GlobalStyles.font14,
                          GlobalStyles.defaultFontFamily,
                          GlobalStyles.fontBold,
                          { color: Colors.primatyBlue },
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("PrescriptionSummary")}
        >
          <Text>Go to Summary</Text>
        </TouchableOpacity>

        <View style={GlobalStyles.inputContent}>
          <Footer handleKeyPress={handleDrugName} handleText={handleText} />
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
  drugContent: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    marginRight: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
});
