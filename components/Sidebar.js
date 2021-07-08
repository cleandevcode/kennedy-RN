import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import MedicineImg from "../assets/medicine.png";
// import NoteImg from "../assets/notes.png";
// import CalendarImg from "../assets/calendar.png";
// import SocketImg from "../assets/socket.png";
import MedicineImg from "../assets/medicine_black.png";
import NoteImg from "../assets/notes_black.png";
import CalendarImg from "../assets/calendar_black.png";
import SocketImg from "../assets/socket_black.png";

const lists = [
  {
    id: 1,
    name: "New Prescription",
    icon: MedicineImg,
    character: "P",
  },
  {
    id: 2,
    name: "Create a Note",
    icon: NoteImg,
    character: "N",
  },
  {
    id: 3,
    name: "Calendar",
    icon: CalendarImg,
    character: "C",
  },
];

const Card = ({ icon, name, desc, character }) => (
  <View style={styles.card}>
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
  </View>
);

export default function Sidebar() {
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
    backgroundColor: '#f9f9f9',
    display: "flex",
    flexDirection: "column",
    padding: 40,
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 22,
    // color: "white",
    color: 'black',
    marginBottom: 30,
    fontFamily: 'Poppins_400Regular',
    fontWeight: '700'
  },
  card: {
    // backgroundColor: "#082671",
    backgroundColor: '#e8e8e9',
    height: 50,
    marginBottom: 20,
    borderRadius: 5,
    // color: "white",
    color: 'black',
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
    backgroundColor: '#d7d7d7'
  },
  character: {
    // color: "white",
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular'
  },
  whiteText: {
    // color: "white",
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular'
  },
});
