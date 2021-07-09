import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import VoiceImg from "../../assets/voice.png";
import GoogleSignInImg from "../../assets/google.png";
import * as AppAuth from "expo-app-auth";

const config = {
  issuer: "https://accounts.google.com",
  scopes: ["openid", "profile"],
  /* This is the CLIENT_ID generated from a Firebase project */
  clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
};

const StorageKey = "@MyApp:CustomGoogleOAuthKey";

export default function SignIn({ navigation }) {
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    (async () => {
      const cachedAuth = await getCachedAuthAsync();
      if (cachedAuth && !authState) {
        setAuthState(cachedAuth);
      }
    })();
  }, []);

  useEffect(() => {
    if (authState && authState.accessToken) {
      signIn(authState.accessToken);
    }
  }, [authState]);

  const signIn = (token) => {
    console.log("token>>>", token);
    const url = `${process.env.REACT_APP_ENDPOINT}/login`;

    fetch(url, { token: token })
      .then((res) => res.json())
      .then((res) => {
        console.log("sign in result>>>>>>>>", res);
      });
    navigation.navigate("Appointment");
  };

  async function cacheAuthAsync(authState) {
    return await AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
  }

  async function getCachedAuthAsync() {
    let value = await AsyncStorage.getItem(StorageKey);
    let authState = JSON.parse(value);
    console.log("getCachedAuthAsync", authState);
    if (authState) {
      if (checkIfTokenExpired(authState)) {
        return refreshAuthAsync(authState);
      } else {
        return authState;
      }
    }
    return null;
  }

  function checkIfTokenExpired({ accessTokenExpirationDate }) {
    return new Date(accessTokenExpirationDate) < new Date();
  }

  async function refreshAuthAsync({ refreshToken }) {
    let authState = await AppAuth.refreshAsync(config, refreshToken);
    console.log("refreshAuth", authState);
    await cacheAuthAsync(authState);
    return authState;
  }

  const signInAsync = async () => {
    const authState = await AppAuth.authAsync(config);
    await cacheAuthAsync(authState);
    console.log("signInAsync", authState);
    return authState;
  };

  async function signOutAsync({ accessToken }) {
    try {
      await AppAuth.revokeAsync(config, {
        token: accessToken,
        isClientIdProvided: true,
      });
      await AsyncStorage.removeItem(StorageKey);
      return null;
    } catch (e) {
      alert(`Failed to revoke token: ${e.message}`);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.betweenContainer}>
        <Text style={styles.font20}>gojitech</Text>
        <Image source={VoiceImg} style={styles.voice} />
      </View>
      <View style={styles.center}>
        <Text style={[styles.font36, styles.fontBold, { marginBottom: 15 }]}>
          Get Started
        </Text>
        <Text style={[styles.font24, styles.textGrey, { marginBottom: 20 }]}>
          Continue with your Google Account
        </Text>
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={async () => {
            const _authState = await signInAsync();
            setAuthState(_authState);
            // await signOutAsync();
            // setAuthState(null);
          }}
        >
          <Image source={GoogleSignInImg} style={styles.signIn} />
        </TouchableOpacity>
      </View>
      <View style={styles.betweenContainer}>
        <Text style={styles.font14}>gojitech</Text>
        <View style={styles.rowContainer}>
          <Text style={[styles.font14, styles.fontBold]}>Build: </Text>
          <Text style={styles.font14}>Frontend: 0.1 | </Text>
          <Text style={styles.font14}>Backend: 1.2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  betweenContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  fontBold: {
    fontWeight: "bold",
  },
  font20: {
    fontSize: 20,
  },
  font14: {
    fontSize: 14,
  },
  font36: {
    fontSize: 36,
  },
  font24: {
    fontSize: 24,
  },
  font22: {
    fontSize: 22,
  },
  textGrey: {
    color: "#ACADAF",
  },
  center: {
    display: "flex",
    alignItems: "center",
  },
  signIn: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: "#ACADAF",
  },
  voice: {
    width: 40,
    height: 40,
  },
});
