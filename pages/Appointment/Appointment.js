import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import AddImg from "../../assets/add.png";
import moment from 'moment';

const randomColors = ["#03cec23d", "#ce03c63d", "#bdff003d"]

export default function Appointment({ show, handleShowModal }) {
  const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(()=> {
      if(!show)
        fetchAppointments();
  }, [])

  const fetchAppointments = () => {
    setLoading(true);
    const url = `${process.env.REACT_APP_ENDPOINT}/users`;
    fetch(url).then(res=>res.json()).then(res=>{
        console.log('res>>>>', res)
        if(res) {
            setItems(res);
        }
    }).catch(err=>console.log(err))
    .finally(()=>{
        setLoading(false)
    })
  }

  const generateRandomColor = (index) => {
    return randomColors[index]
  }

  const formatDate = (date) => {
      const format = "DD/MM/YYYY hh:mm a";
      return moment(date).format(format).toString()
  }

  const renderItem = (row) => {
    const { item, index } = row;
    return (
      <TouchableOpacity
        key={index}
        style={[{ backgroundColor: generateRandomColor(index % 3) }, styles.cardContainer]}
      >
        <View style={[styles.flexContainer, styles.spaceBetweenContent]}>
          <View style={[{ display: "flex" }, styles.spaceBetweenContent]}>
            <Text
              style={[styles.fontBold, styles.fontSize16, { marginBottom: 10 }]}
            >
              {item.fullName}
            </Text>
            <Text style={styles.fontSize14}>{item.reason}</Text>
          </View>
          <Text style={styles.fontSize14}>{formatDate(item.dateTime)}</Text>
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
      {loading &&
        <ActivityIndicator size="large" />
      }
      {!loading &&
        <FlatList
            data={items}
            extraData={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.w100}
        />
      }
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
    fontFamily: 'Poppins_400Regular'
  },
  fontSize14: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular'
  },
  fontSize16: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular'
  },
  fontSize18: {
    fontSize: 18,
    fontFamily: 'Poppins_400Regular'
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
    width: 18,
    height: 18,
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
