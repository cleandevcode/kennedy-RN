import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AddImg from "../../assets/add.png";

const lists = [
  {
    id: 1,
    name: "Rober Palimer",
    reason: "Additional Details are added here",
    time: "10:00 AM",
    bgColor: "#03cec23d",
  },
  {
    id: 2,
    name: "Rober Palimer",
    reason: "Additional Details are added here",
    time: "10:00 AM",
    bgColor: "#ce03c63d",
  },
  {
    id: 3,
    name: "Rober Palimer",
    reason: "Additional Details are added here",
    time: "10:00 AM",
    bgColor: "#03cec23d",
  },
  {
    id: 4,
    name: "Rober Palimer",
    reason: "Additional Details are added here",
    time: "10:00 AM",
    bgColor: "#bdff003d",
  },
];

export default function Appointment({ handleShowModal }) {
  const [items, setItems] = useState([]);

  const renderItem = (row) => {
    const { item, index } = row;
    return (
      <TouchableOpacity
        key={index}
        style={[{ backgroundColor: item.bgColor }, styles.cardContainer]}
      >
        <View style={[styles.flexContainer, styles.spaceBetweenContent]}>
          <View style={[{ display: "flex" }, styles.spaceBetweenContent]}>
            <Text
              style={[styles.fontBold, styles.fontSize16, { marginBottom: 10 }]}
            >
              {item.name}
            </Text>
            <Text style={styles.fontSize14}>{item.reason}</Text>
          </View>
          <Text style={styles.fontSize14}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.fongSize24, styles.fontBold]}>Today</Text>
      <Text
        style={[
          styles.fontSize14,
          styles.fontBold,
          { marginBottom: 30, marginTop: 10 },
        ]}
      >
        Friday, April 21 2021
      </Text>
      <View style={[styles.flexContainer, styles.spaceBetweenContent]}>
        <Text style={[styles.fontSize18, styles.fontBold]}>
          Upcoming Appointments
        </Text>
        <TouchableOpacity
          style={styles.flexContainer}
          onPress={handleShowModal}
        >
          <Image style={styles.addImg} source={AddImg} />
          <Text style={[styles.fontSize18, { marginLeft: 5 }]}>
            New Appointment
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={lists}
        extraData={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.w100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  fontBold: {
    fontWeight: "700",
  },
  fongSize24: {
    fontSize: 24,
  },
  fontSize14: {
    fontSize: 14,
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize18: {
    fontSize: 18,
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  spaceBetweenContent: {
    justifyContent: "space-between",
  },
  addImg: {
    width: 15,
    height: 15,
  },
  w100: {
    width: "100%",
  },
  cardContainer: {
    padding: 20,
    borderRadius: 5,
    marginTop: 15,
  },
});
