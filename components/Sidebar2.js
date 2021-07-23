import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeImg from "../assets/voice_white.png";
import OrderImg from "../assets/rxcart.png";
import NoteImg from "../assets/note_big.png";
import HistoryImg from "../assets/history.png";
import SocketImg from "../assets/socket.png";

import * as Color from "../style/color";

const lists = [
  {
    id: 0,
    name: "Home",
    icon: HomeImg,
    page: "Prescription",
  },
  {
    id: 1,
    name: "Rx Order",
    icon: OrderImg,
    page: "Cart",
  },
  {
    id: 2,
    name: "Rx History",
    icon: HistoryImg,
    page: "History",
  },
  {
    id: 3,
    name: "Note",
    icon: NoteImg,
    page: "SoapNote",
  },
];

const Card = ({ icon, name, desc, character, page, handlePress }) => (
  <TouchableOpacity style={styles.card} onPress={() => handlePress(page)}>
    <View style={styles.flexContainer}>
      <Image source={icon} style={styles.icon} />
      <View style={{ marginTop: 5 }}>
        <Text style={styles.whiteText}>{name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function Sidebar2() {
  const navigation = useNavigation();

  const handlePress = (page) => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.logo}>g</Text>
        {lists.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            name={item.name}
            character={item.character}
            page={item.page}
            handlePress={handlePress}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00164E",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  logo: {
    fontSize: 36,
    color: "white",
    marginBottom: 50,
    fontFamily: "Poppins_400Regular",
  },
  card: {
    marginBottom: 30,
    borderRadius: 5,
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 23,
  },
  characterContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#00164E",
  },
  whiteText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
});
