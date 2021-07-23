import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import VoiceImg from "../assets/voice_green.png";
import GlobalStyles from "../style/globalStyle";
import * as Colors from "../style/color";
import { fetchPatients } from "../service/base.service";
import { useDispatch } from "react-redux";
import Avatar from "./Avatar";

export default function SearchPatient() {
  const dispatch = useDispatch();

  const [patient, setPatient] = useState("");
  const [currentPatient, setCurrentPatient] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      handleContinue();
    }, 1000);
  }, [currentPatient]);

  const handleSearchPatients = () => {
    fetchPatients(patient)
      .then((res) => {
        if (res.data.responseCode === 1) {
          setCurrentPatient(res.data.result[0]);

          dispatch({
            type: "UPDATE_PATIENTS",
            payload: res.data.result,
          });
        }
      })
      .catch((err) => {
        console.log("error>>>", err);
      });
  };

  const handleContinue = () => {
    dispatch({
      type: "UPDATE_PATIENT",
      payload: currentPatient,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={VoiceImg} style={styles.image} />
      <Text
        style={[
          GlobalStyles.font36,
          GlobalStyles.defaultFontFamily,
          { color: Colors.mainBlue, marginBottom: 40 },
        ]}
      >
        Kennedy
      </Text>
      <View>
        <Text style={[GlobalStyles.defaultFontFamily, GlobalStyles.font18]}>
          Patient
        </Text>
      </View>
      {currentPatient !== null ? (
        <View
          style={[
            GlobalStyles.rowContainer,
            styles.inputContainer,
            styles.mb20,
          ]}
        >
          <Avatar letter={currentPatient.firstName} />
          <View style={{ marginLeft: 20 }}>
            <Text style={[GlobalStyles.font20, GlobalStyles.defaultFontFamily]}>
              {currentPatient.firstName} {currentPatient.lastName}
            </Text>
            <Text
              style={[
                GlobalStyles.font14,
                GlobalStyles.defaultFontFamily,
                { color: Colors.strongGrey },
              ]}
            >
              {currentPatient.dateOfBirth} | {currentPatient.sex} |{" "}
              {currentPatient.phone}
            </Text>
          </View>
        </View>
      ) : (
        <TextInput
          style={[styles.inputContainer, GlobalStyles.defaultFontFamily]}
          value={patient}
          onChangeText={(value) => setPatient(value)}
          onSubmitEditing={handleSearchPatients}
          placeholder="Enter or say the patient name"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    padding: 40,
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
  inputContainer: {
    marginTop: 20,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,
    // elevation: 2,
    // borderColor: "#000",
    // borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: "100%",
    height: 80,
    fontSize: 20,
    borderRadius: 8,
    backgroundColor: "white",
  },
  mb20: {
    marginBottom: 20,
  },
});
