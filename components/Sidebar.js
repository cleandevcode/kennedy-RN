import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import MedicineImg from "../assets/medicine.png";
// import NoteImg from "../assets/notes.png";
// import CalendarImg from "../assets/calendar.png";
// import SocketImg from "../assets/socket.png";
import MedicineImg from "../assets/medicine_black.png";
import NoteImg from "../assets/notes_black.png";
import CalendarImg from "../assets/calendar_black.png";
import SocketImg from "../assets/socket_black.png";

import * as Color from "../style/color";

const lists = [
  {
    id: 1,
    name: "New Prescription",
    icon: MedicineImg,
    character: "P",
    page: "Prescription",
  },
  {
    id: 2,
    name: "Create a Note",
    icon: NoteImg,
    character: "N",
    page: "Note",
  },
  {
    id: 3,
    name: "Calendar",
    icon: CalendarImg,
    character: "C",
    page: "Calendar",
  },
];

const Card = ({ icon, name, desc, character, page, handlePress }) => (
  <TouchableOpacity style={styles.card} onPress={() => handlePress(page)}>
    <View style={styles.flexContainer}>
      <Image source={icon} style={styles.icon} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.whiteText}>{name}</Text>
        {desc && <Text style={{ fontSize: 12, color: "#6a8ee8" }}>{desc}</Text>}
      </View>
    </View>
    {character && (
      <View style={styles.characterContent}>
        <Text style={styles.character}>{character}</Text>
      </View>
    )}
  </TouchableOpacity>
);

export default function Sidebar() {
  const navigation = useNavigation();

  const handlePress = (page) => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>gojitech</Text>
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
      <Card icon={SocketImg} name="Dr.John Adams" desc="ABC Clinic" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#00164E",
    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    padding: 30,
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 22,
    // color: "white",
    color: "black",
    marginBottom: 30,
    fontFamily: "Poppins_400Regular",
    fontWeight: "700",
  },
  card: {
    // backgroundColor: "#082671",
    backgroundColor: Color.lightGrey,
    height: 50,
    marginBottom: 20,
    borderRadius: 5,
    // color: "white",
    color: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 15,
    height: 15,
  },
  characterContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    borderRadius: 11,
    // backgroundColor: "#00164E",
    backgroundColor: "#d7d7d7",
  },
  character: {
    // color: "white",
    color: "black",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  whiteText: {
    // color: "white",
    color: "black",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
});
