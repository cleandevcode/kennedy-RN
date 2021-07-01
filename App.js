import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import Sidebar from "./components/Sidebar";
import Appointment from "./pages/Appointment/Appointment";
import Footer from "./components/Footer";
import AppointmentModal from "./pages/Appointment/AppointmentModal";

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular });

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <Sidebar />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.content}>
            <Appointment show={show} handleShowModal={handleShow} />
          </View>
          <View style={styles.inputContent}>
            <Footer />
          </View>
        </View>
      </View>
      {show && <AppointmentModal show={show} handleShow={handleShow} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  sidebar: {
    width: "30%",
    height: "100%",
  },
  mainContainer: {
    width: "70%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    height: "85%",
  },
  inputContent: {
    height: "15%",
  },
});
