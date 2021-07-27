import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import GlobalStyles from "../../style/globalStyle";
import { SideBar, Footer, Header, SideBar2 } from "../../components";
import { SearchPatient, SelectModal } from "../../components";

import * as Colors from "../../style/color";

import { useNavigation } from "@react-navigation/native";
import { getDrugsCandidates, getEntities } from "../../service/base.service";
import { getFormattedDate } from "../../service/utility";

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
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [drugName, setDrugName] = useState("");
  const [drug, setDrug] = useState(null);
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(false);

  const [drugOptions, setDrugOptions] = useState([]);

  const [firstFlag, setFirstflag] = useState(false);

  const patient = useSelector((state) => state.patient.patient);

  useEffect(() => {
    setDrugName("");
    setDrug(null);
    setLimit(false);
    setFirstflag(false);
    setDrugOptions([]);
    setDetail("");
  }, []);

  useEffect(() => {
    if (drugName.length > 4 && !limit) {
      getDrugCandidats(drugName.substr(0, 4));
    } else if (drugName.length === 0) {
      setLimit(false);
    }
  }, [drugName]);

  const handleDrugName = (txt) => {
    setDrugName(txt);
  };

  const analyzeDetail = () => {};

  const handleText = (text) => {
    if (firstFlag) {
      setDetail(text);
      setTimeout(() => {
        getEntities(text)
          .then((response) => {
            if (response.data.responseCode === 1 && response.data.result) {
              const luisEntities = response.data.result.prediction.entities;
              const temp = {
                drugId: drug.key,
                brandName: drug.label,
                duration: luisEntities?.drugDuration?.[0].split(" ")[0] || "0",
                quantity: luisEntities?.drugTotal?.[0].split(" ")[0] || "0",
                drugUnits: luisEntities?.drugDosage?.[0].split(" ")[1] || "",
                repeats: luisEntities?.drugRepeat[0] || "0",
                instructions: "",
                rxDate: luisEntities?.startDate || getFormattedDate(),
                endDate: luisEntities?.endDate || getFormattedDate(),
                note: "",
                transcription: response?.data?.result?.query,
                frequency: luisEntities.drugInterval?.[0] || "",
                durationUnit:
                  luisEntities?.drugDuration?.[0].split(" ")[1] || "",
              };
              dispatch({
                type: "UPDATE_PRESCRIPTION",
                payload: temp,
              });
              if (temp.brandName.length > 0 && temp.quantity > 0) {
                handleGoSummary(temp);
              }
            }
          })
          .catch((err) => {
            console.log("input text error>>>>>", err);
          });
      }, 1000);

      console.log("input text detail>>>>>>>>>>>>>>>>>", detail);
    }
  };

  const getDrugCandidats = (drugName) => {
    setLimit(true);
    getDrugsCandidates(drugName)
      .then((res) => {
        if (res?.status === 200 && res?.data?.result) {
          let temp = [];

          res.data.result.map((item) => {
            temp.push({
              key: item.id,
              label: item.name,
            });
          });

          setDrugOptions(temp);

          dispatch({
            type: "SET_DRUG_CANDIDATES",
            payload: temp,
          });
        }
      })
      .catch((err) => {
        console.log("000000000000>>>>>>>>>>>", err);
      });
  };

  const handleSetDrug = (item) => {
    setDrug(item);
    setFirstflag(true);
    setDrugName(item.label);
  };

  const handleGoSummary = (data) => {
    setTimeout(() => {
      navigation.navigate("PrescriptionSummary", data);
      setDrugName("");
      setLimit(false);
      setFirstflag(false);
      setDrugOptions([]);
      setDetail("");
    }, 2000);
  };

  const handleChangeDrug = (drug) => {
    setDrug(drug);
  };

  if (loading) {
    return (
      <View style={GlobalStyles.container}>
        <ActivityIndicator />
      </View>
    );
  }

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
                {firstFlag && drugOptions.length > 0 && (
                  <SelectModal
                    lists={drugOptions}
                    drugName={drug.label}
                    handleChangeDrug={handleChangeDrug}
                  />
                )}

                {drugOptions && drugOptions.length > 0 && !firstFlag && (
                  <ScrollView
                    horizontal={true}
                    style={{ maxHeight: 50, marginTop: 10 }}
                  >
                    {drugOptions.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.drugContent}
                        onPress={() => handleSetDrug(item)}
                      >
                        <Text
                          style={[
                            GlobalStyles.font14,
                            GlobalStyles.defaultFontFamily,
                            GlobalStyles.fontBold,
                            { color: Colors.primatyBlue },
                          ]}
                        >
                          {item.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                )}
              </View>
              {firstFlag && (
                <View style={styles.drugsContainer}>
                  <Text
                    style={[
                      GlobalStyles.font24,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                    ]}
                  >
                    Prescription details for {drug.label}
                  </Text>
                  <Text
                    style={[
                      GlobalStyles.font14,
                      GlobalStyles.defaultFontFamily,
                    ]}
                  >
                    Duration, quantity, refills and additional instructions
                  </Text>
                  <Text
                    style={[
                      GlobalStyles.font20,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                      { color: Colors.primatyBlue, marginTop: 15 },
                    ]}
                  >
                    {detail}
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>
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
    marginBottom: 10,
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
