import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import MicImg from "../assets/mic.png";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Tap the mic to begin"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity style={styles.micContainer}>
        <Image source={MicImg} style={styles.mic} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  textInput: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 20,
    height: 50,
    width: 200,
    fontFamily: "Poppins_400Regular",
  },
  micContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#00164E",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mic: {
    width: 40,
    height: 40,
  },
});
