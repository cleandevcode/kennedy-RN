import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import CalendarImg from "../../assets/calendar1.png";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

export default function AppointmentModal({ show, handleShow }) {
  const [state, setState] = useState({
    name: "",
    reason: "",
    date: new Date(),
  });
  const [dateString, setDateString] = useState("");
  
  useEffect(() => {
    setDateString(convertDateToString(state.date));
  }, [state]);
  const [calendarShow, setCalendarShow] = useState(false);

  const handleConfirmDate = (date) => {
    setState({ ...state, date: date });
  };

  const handleShowCalendar = () => {
    setCalendarShow(!calendarShow);
  };

  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const convertDateToString = (date) => {
    const format = "DD/MM/YYYY hh:mm a";
    return moment(date).format(format).toString();
  };

  const saveAppointment = () => {
    if(state.name === "" || state.reason === "") {
      return
    }
    const url = `${process.env.REACT_APP_ENDPOINT}/users`;

    let request = {
      "fullName": state.name,
      "reason": state.reason,
      "dateTime": state.date
    }
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(request)
    }).then(res=>{
      if(res) {
        handleShow()
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <Modal isVisible={show} style={styles.modal}>
      <View style={styles.container}>
        <Text style={[styles.title, styles.marginBotton20]}>
          New Appointment
        </Text>
        <Text
          style={[styles.fontSize16, styles.fontBold, styles.marginBotton20]}
        >
          Full Name
        </Text>
        <TextInput
          style={[styles.textInput, styles.marginBotton20]}
          value={state.name}
          onChangeText={(value) => handleChange("name", value)}
        />
        <Text
          style={[styles.fontSize16, styles.fontBold, styles.marginBotton20]}
        >
          Reason for Visit
        </Text>
        <TextInput
          style={[styles.textInput, styles.marginBotton20]}
          value={state.reason}
          onChangeText={(value) => handleChange("reason", value)}
        />
        <View>
          <Text
            style={[
              styles.fontSize16,
              styles.fontBold,
              styles.marginBotton20,
              { marginTop: 10, marginRight: 15 },
            ]}
          >
            Date & Time
          </Text>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handleShowCalendar}
          >
            <Image width={15} height={15} source={CalendarImg} />

            <DateTimePickerModal
              isVisible={calendarShow}
              mode="datetime"
              onConfirm={handleConfirmDate}
              onCancel={handleShowCalendar}
            />
            <TextInput
              value={dateString}
              style={{
                width: 200,
                marginLeft: 20,
                fontSize: 14,
                color: "black",
              }}
              editable={false}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            style={[styles.cancel, styles.button]}
            onPress={handleShow}
          >
            <Text style={{ color: "black", fontSize: 16, fontFamily: 'Poppins_400Regular' }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.save, styles.button]} onPress={saveAppointment}>
            <Text style={{ color: "white", fontSize: 16, fontFamily: 'Poppins_400Regular' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    margin: 0, // This is the important style you need to set
    alignItems: undefined,
    justifyContent: undefined,
    flex: 1,
  },
  container: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "white",
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Poppins_400Regular'
  },
  fontSize16: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular'
  },
  fontSize14: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },
  fontBold: {
    fontWeight: "bold",
  },
  calendar: {
    width: 15,
    height: 15,
    marginRight: 15,
  },
  textInput: {
    height: 60,
  },
  marginBotton20: {
    marginBottom: 20,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 90,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cancel: {
    backgroundColor: "#ededed",
    marginRight: 20,
  },
  save: {
    backgroundColor: "#00164E",
  },
});
