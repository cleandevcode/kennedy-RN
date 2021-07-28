import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import GlobalStyles from "../../style/globalStyle";
import {
  SideBar2,
  Footer,
  SideBar,
  Header,
  SelectModal,
} from "../../components";
import ModalSelector from "react-native-modal-selector-searchable";
import DropDownImg from "../../assets/dropDown.png";
import * as Colors from "../../style/color";

import { useNavigation, useRoute } from "@react-navigation/native";

export default function PrescriptionSummary() {
  const navigation = useNavigation();
  const route = useRoute();
  const { params } = route;
  console.log(">>>>", route);

  const [state, setState] = useState({
    drugId: params.drugId,
    brandName: params.brandName,
    providerNo: 0,
    takeMin: 0,
    takeMax: 0,
    rxDate: params.endDate,
    frequency: params?.frequency,
    duration: params?.duration || "0",
    durationUnit: params?.durationUnit,
    route: "string",
    method: "string",
    prn: true,
    repeats: params.repeats || 0,
    quantity: Math.round(Number(params.quantity)).toString() || "0",
    instructions: params.instructions || params.transcription,
    additionalInstructions: "",
    archived: true,
    archivedReason: "",
    archivedDate: null,
    strength: 0,
    strengthUnit: "string",
    externalProvider: "",
    longTerm: true,
    noSubstitutions: true,
    drugUnits: params.drugUnits,
    endDate: params.endDate,
  });

  const handleChangeDrug = (drug) => {
    setState({ ...state, drugId: drug.key, brandName: drug.label });
  };

  const drugCandidates = useSelector((state) => state.prescription.drugs);

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
                    GlobalStyles.font12,
                    GlobalStyles.defaultFontFamily,
                    { color: "white", marginLeft: 10 },
                  ]}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.mainContainer}>
              <View style={GlobalStyles.rowContainer}>
                <Text
                  style={[
                    GlobalStyles.font14,
                    GlobalStyles.defaultFontFamily,
                    GlobalStyles.fontBold,
                    { marginRight: 15 },
                  ]}
                >
                  Medication:
                </Text>
                <SelectModal
                  lists={drugCandidates}
                  drugName={state.brandName}
                  handleChangeDrug={handleChangeDrug}
                />
                {/* <ModalSelector
                  data={data}
                  initValue="Select something yummy!"
                  supportedOrientations={["landscape"]}
                  accessible={true}
                  scrollViewAccessibilityLabel={"Scrollable options"}
                  cancelButtonAccessibilityLabel={"Cancel Button"}
                  cancelText="Cancel"
                  cancelTextStyle={GlobalStyles.font14}
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
                </ModalSelector> */}
              </View>
              <View style={GlobalStyles.rowContainer}>
                <Text
                  style={[
                    GlobalStyles.font14,
                    GlobalStyles.defaultFontFamily,
                    GlobalStyles.fontBold,
                    { marginRight: 15 },
                  ]}
                >
                  Duration:
                </Text>
                <TextInput
                  value={state.duration}
                  style={[
                    GlobalStyles.font14,
                    GlobalStyles.defaultFontFamily,
                    { color: Colors.primatyBlue },
                  ]}
                />
              </View>
              <View style={GlobalStyles.rowContainer}>
                <View style={[GlobalStyles.rowContainer, { marginRight: 20 }]}>
                  <Text
                    style={[
                      GlobalStyles.font14,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                      { marginRight: 15 },
                    ]}
                  >
                    Quantity:
                  </Text>
                  <TextInput
                    value={state.quantity}
                    style={[
                      GlobalStyles.font14,
                      GlobalStyles.defaultFontFamily,
                      { color: Colors.primatyBlue },
                    ]}
                  />
                </View>
                <View style={GlobalStyles.rowContainer}>
                  <Text
                    style={[
                      GlobalStyles.font14,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                      { marginRight: 15 },
                    ]}
                  >
                    Unit:
                  </Text>
                  <TextInput
                    value={state.drugUnits}
                    style={[
                      GlobalStyles.font14,
                      GlobalStyles.defaultFontFamily,
                      { color: Colors.primatyBlue },
                    ]}
                  />
                </View>
              </View>
              <View style={GlobalStyles.rowContainer}>
                <Text
                  style={[
                    GlobalStyles.font14,
                    GlobalStyles.defaultFontFamily,
                    GlobalStyles.fontBold,
                    { marginRight: 15 },
                  ]}
                >
                  Refills:
                </Text>
                <TextInput
                  value={state.repeats}
                  style={[
                    GlobalStyles.font14,
                    GlobalStyles.defaultFontFamily,
                    { color: Colors.primatyBlue },
                  ]}
                />
              </View>
              <View style={GlobalStyles.rowContainer}>
                <View style={[GlobalStyles.rowContainer, { marginRight: 20 }]}>
                  <Text
                    style={[
                      GlobalStyles.font14,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                      { marginRight: 15 },
                    ]}
                  >
                    Start Date:
                  </Text>
                  <TextInput
                    value={state.rxDate}
                    style={[
                      GlobalStyles.font14,
                      GlobalStyles.defaultFontFamily,
                      { color: Colors.primatyBlue },
                    ]}
                  />
                </View>
                <View style={GlobalStyles.rowContainer}>
                  <Text
                    style={[
                      GlobalStyles.font14,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                      { marginRight: 15 },
                    ]}
                  >
                    End Date:
                  </Text>
                  <TextInput
                    value={state.endDate}
                    style={[
                      GlobalStyles.font14,
                      GlobalStyles.defaultFontFamily,
                      { color: Colors.primatyBlue },
                    ]}
                  />
                </View>
              </View>
              <Text
                style={[
                  GlobalStyles.font14,
                  GlobalStyles.defaultFontFamily,
                  GlobalStyles.fontBold,
                  { marginRight: 15, marginTop: 10 },
                ]}
              >
                Instructions:
              </Text>
              <TextInput
                style={[
                  GlobalStyles.font14,
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
                value={state.instructions}
              />
              <Text
                style={[
                  GlobalStyles.font14,
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
                  GlobalStyles.font14,
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
                value={state.additionalInstructions}
              />
            </ScrollView>
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
    padding: 20,
  },

  mainContainer: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    display: "flex",
    marginTop: 10,
    borderRadius: 10,
  },
});
