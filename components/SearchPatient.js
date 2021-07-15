import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import VoiceImg from "../assets/voice_green.png";
import GlobalStyles from "../style/globalStyle";
import * as Colors from "../style/color";

export default function SearchPatient() {
  const [patient, setPatient] = useState("");

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
        <Text style={[GlobalStyles.defaultFontFamily, GlobalStyles.font14]}>
          Patient
        </Text>
      </View>
      <TextInput
        style={[styles.inputContainer, GlobalStyles.defaultFontFamily]}
        value={patient}
        onChangeText={(value) => setPatient(value)}
        placeholder="Enter or say the patient name"
      />
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
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
    height: 60,
    fontSize: 20,
    borderRadius: 8,
  },
});
