import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Permissions from 'expo-permissions';
import { usePermissions } from 'expo-permissions';
import MicImg from "../assets/mic.png";
import ListeningImg from "../assets/listening.png";

export default function Footer() {
  const [ permission, askForPermission ] = usePermissions(Permissions.AUDIO_RECORDING, {ask: true})
  const [listening, setListening] = useState(false);

  const handlePressListening = () => {
    if(!permission || permission.status !== 'granted') {
      askForPermission()
    }
    setListening(!listening);
  }

  const placeholder =  listening ? "Listening" : "Tap the mic to begin"

  

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity style={[styles.micContainer, {backgroundColor: listening ? 'unset' : '#00164E'}]} onPress={handlePressListening}>
        {listening ? 
          <Image source={ListeningImg} style={styles.listening} />
          : 
          <Image source={MicImg} style={styles.mic} />
        }
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
    width: 300,
    fontFamily: "Poppins_400Regular",
  },
  micContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mic: {
    width: 40,
    height: 40,
  },
  listening: {
    width: 70,
    height: 70
  }
});
