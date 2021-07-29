import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import GlobalStyles from "../../style/globalStyle";
import * as Colors from "../../style/color";
import NoteProcessor from "./Processor";
import Summary from "./Summary";
import Sidebar2 from "../../components/Sidebar2";
import { Header } from "../../components";

const themes = [
  {
    id: 1,

    name: "Subjective",
  },
  {
    id: 2,

    name: "Objective",
  },
  {
    id: 3,

    name: "Assessment",
  },
  {
    id: 4,

    name: "Plan",
  },
];

export default function CreateNotes() {
  const route = useRoute();
  const dispatch = useDispatch();

  const { params } = route;
  console.log("111data>>>>", params);

  const { data, answer } = params;

  const stepIndex = useSelector((state) => state.soapNotes.soapIndex);
  const currentStep = useSelector((state) => state.soapNotes.currentStep);
  const allSet = useSelector((state) => state.soapNotes.allSet);

  const totalSteps = useSelector((state) => state.soapNotes.soapLength);

  const handleEditAnswer = () => {};

  const showStepStatus = (from, to) => {
    if (currentStep >= from && currentStep <= to) {
      return "working";
    } else if (currentStep > to) {
      return "complete";
    }
    return "disabled";
  };

  const handleStep = (idx) => {
    if (idx < 4) {
      dispatch({
        type: "SET_SOAP_STEP",
        payload: idx,
      });
      if (currentStep <= totalSteps)
        dispatch({
          type: "SET_SOAP_CURRENT_STEP",
          payload: data[idx].from,
        });
    } else {
      dispatch({
        type: "SET_SOAP_ALL",
        payload: true,
      });
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.sidebar}>
        <Sidebar2 />
      </View>
      <View style={GlobalStyles.mainContainer}>
        <View style={GlobalStyles.content}>
          <Header />
          <View style={styles.container}>
            <View
              style={[
                GlobalStyles.rowContainer,
                {
                  justifyContent: "space-between",
                },
              ]}
            >
              <View style={GlobalStyles.rowContainer}>
                <ScrollView horizontal>
                  {themes.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleStep(index)}
                      style={[
                        styles.themeCard,
                        showStepStatus(data[index].from, data[index].to) ===
                        "working"
                          ? styles.working
                          : showStepStatus(data[index].from, data[index].to) ===
                            "disabled"
                          ? styles.disabled
                          : styles.complete,
                      ]}
                    >
                      <Text
                        style={[
                          GlobalStyles.font12,
                          GlobalStyles.defaultFontFamily,
                          {
                            color:
                              showStepStatus(
                                data[index].from,
                                data[index].to
                              ) === "working"
                                ? Colors.white
                                : showStepStatus(
                                    data[index].from,
                                    data[index].to
                                  ) === "disabled"
                                ? Colors.step_disabled_fg
                                : Colors.white,
                          },
                        ]}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                  <TouchableOpacity
                    style={[
                      styles.themeCard,
                      allSet ? styles.working : styles.disabled,
                    ]}
                  >
                    <Text
                      style={[
                        GlobalStyles.font12,
                        GlobalStyles.defaultFontFamily,
                        { color: allSet ? "white" : Colors.step_disabled_fg },
                      ]}
                    >
                      Summary
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <View style={GlobalStyles.rowContainer}>
                <Text
                  style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}
                >
                  Hypertension |{" "}
                </Text>
                <Text
                  style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}
                >
                  Step {currentStep} of {totalSteps}
                </Text>
              </View>
            </View>
            <View style={[styles.noteProcessor]}>
              {allSet ? (
                <Summary />
              ) : (
                <NoteProcessor
                  value={data[stepIndex]}
                  answer={answer}
                  resetStep={handleStep}
                  stepIndex={stepIndex}
                  editAnswer={handleEditAnswer}
                />
              )}
            </View>
          </View>
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
  themeCard: {
    height: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 20,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  working: {
    backgroundColor: Colors.step_working,
  },
  complete: {
    backgroundColor: Colors.step_complete,
  },
  disabled: {
    backgroundColor: Colors.step_disabled_bg,
  },
  noteProcessor: {
    display: "flex",
    justifyContent: "flex-end",
    height: "100%",
  },
});
