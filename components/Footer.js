import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Permissions from "expo-permissions";
// import { usePermissions } from "expo-permissions";
import MicImg from "../assets/mic.png";
import ListeningImg from "../assets/listening.png";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import axios from "axios";

export default function Footer({ handleKeyPress, handleText }) {
  // const [permission, askForPermission] = usePermissions(
  //   Permissions.AUDIO_RECORDING,
  //   { ask: true }
  // );
  const [listening, setListening] = useState(false);
  const [recording, setRecording] = useState(null);
  const [text, setText] = useState("");

  const handlePressListening = () => {
    // if (!permission || permission.status !== "granted") {
    //   askForPermission();
    // }
    if (!listening) {
      startRecording();
    } else {
      stopRecording();
    }
    setListening(!listening);
  };

  const placeholder = listening ? "Listening" : "Tap the mic to begin";

  const startRecording = async () => {
    try {
      console.log("Requesting permissions....");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording...");
      let temp = {
        android: {
          audioEncoder: 3,
          bitRate: 128000,
          extension: ".wav",
          numberOfChannels: 1,
          outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_LINEARPCM,
          sampleRate: 44100,
        },
        ios: {
          audioQuality: 127,
          bitRate: 128000,
          extension: ".caf",
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
          numberOfChannels: 2,
          sampleRate: 44100,
        },
        isMeteringEnabled: true,
      };
      const { recording } = await Audio.Recording.createAsync(temp);
      setRecording(recording);
      console.log("Recording started");
    } catch (error) {
      console.log("Failed to start recording", error);
    }
  };

  const stopRecording = async () => {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const fileUri = recording.getURI();
    console.log("file uri>>>>>", fileUri);
    const uri = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    // audioTest("data:audio/wav;base64," + uri);

    const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (perm.status != "granted") {
      return;
    }
    try {
      const assets = await MediaLibrary.createAssetAsync(fileUri);
      console.log("Recording stopped and stored at", assets);
      // audioTest(uri);
    } catch (error) {
      console.log("media library error>>>>", error);
    }
  };

  const audioTest = async (base64) => {
    // console.log("env>>>", process.env);
    let config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1hcmlldHRhNDRAaG90bWFpbC5jb20iLCJuYW1lIjoiTGlsYSBCcmVpdGVuYmVyZyIsInRva2VuSWQiOiIiLCJpYXQiOjE2MjczMDE2MDgsImV4cCI6MTYyOTg5MzYwOH0.bEbRGmmS-lQoC0UZsifL3p62dQiRBYW9j9_8Ev-T4Ts`,
      },
    };
    const apiUrl = "https://kennedy-dev1.gojitech.systems/api/v1/record";

    console.log("base641>>>>", base64);

    let response = await axios.post(
      apiUrl,
      {
        base64Content: "data:audio/wav;" + base64,
        userID: "467397c0-df24-4150-a80f-3b82974e5deb",
      },
      config
    );

    alert(response.data.responseCode);

    console.log("base642>>>>", base64);

    console.log("record res>>>>", response);
  };

  const handleChangeText = (txt) => {
    setText(txt);
  };

  const handleSubmit = () => {
    handleText(text);
    setText("");
  };

  const _handleKeyPress = () => {
    handleKeyPress(text);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
          value={text}
          onChangeText={(value) => handleChangeText(value)}
          onSubmitEditing={handleSubmit}
          onKeyPress={_handleKeyPress}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.micContainer,
          { backgroundColor: listening ? "unset" : "#00164E" },
        ]}
        onPress={handlePressListening}
      >
        {listening ? (
          <Image source={ListeningImg} style={styles.listening} />
        ) : (
          <Image source={MicImg} style={styles.mic} />
        )}
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
    backgroundColor: "white",
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
    height: 70,
  },
});
