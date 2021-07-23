import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import GlobalStyles from "../../style/globalStyle";
import { SideBar2, Footer, SideBar, Header } from "../../components";
import { useNavigation } from "@react-navigation/native";
import ModalSelector from "react-native-modal-selector-searchable";
import BackImg from "../../assets/back.png";
import PersonImg from "../../assets/person.png";
import DropDownImg from "../../assets/dropDown-black.png";
import CalendarImg from "../../assets/calendar1.png";
import NoteImg from "../../assets/notes_black.png";
import CheckImg from "../../assets/roundCheck.png";
import * as Colors from "../../style/color";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const patient = {
  chartNumber: null,
  createdAt: "2021-06-15T01:00:53.635Z",
  deletedAt: null,
  dob: "1978-01-13",
  docter: null,
  gender: "Female",
  id: "97119",
  name: "Dennis, Andrea",
  phone: "905-",
  rosterStatus: null,
  status: "AC",
  updatedAt: "2021-06-15T01:00:53.635Z",
};

const data = [
  { key: 0, label: "Fruits" },
  { key: 1, label: "Red Apples" },
  { key: 2, label: "Cherries" },
  {
    key: 3,
    label: "Cranberries",
    accessibilityLabel: "Tap here for cranberries",
  },
  // etc...
  // Can also add additional custom keys which are passed to the onChange callback
  { key: 4, label: "Vegetable", customKey: "Not a fruit" },
];

export default function Appointment() {
  const [appointment, setAppointment] = useState("John Adams");
  const [calendarShow, setCalendarShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState("");
  const [ready, setReady] = useState(false);
  const [note, setNote] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    setDateString(convertDateToString(date));
  }, [date]);

  const handleConfirmDate = (date) => {
    setDate(date);
  };

  const handleShowCalendar = () => {
    setCalendarShow(!calendarShow);
  };

  const convertDateToString = (date) => {
    const format = "Do MMMM YYYY";
    return moment(date).format(format).toString();
  };

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.sidebar}>
        <SideBar2 />
      </View>
      <View style={GlobalStyles.mainContainer}>
        <View style={GlobalStyles.content}>
          {/* <Header /> */}
          {patient === null ? (
            <SearchPatient />
          ) : ready ? (
            <View
              style={[
                styles.container,
                styles.justifyEnd,
                { flexDirection: "column" },
              ]}
            >
              <Text
                style={[
                  GlobalStyles.font24,
                  GlobalStyles.defaultFontFamily,
                  GlobalStyles.fontBold,
                  { marginBottom: 20 },
                ]}
              >
                Appointment Created
              </Text>
              <View style={styles.submitContainer}>
                <View style={[GlobalStyles.rowContainer, styles.mb20]}>
                  <Image source={PersonImg} width={25} height={20} />
                  <View style={{ marginLeft: 10 }}>
                    <Text
                      style={[
                        GlobalStyles.font20,
                        GlobalStyles.defaultFontFamily,
                      ]}
                    >
                      {appointment}
                    </Text>
                    <Text
                      style={[
                        GlobalStyles.font14,
                        GlobalStyles.defaultFontFamily,
                        { color: Colors.strongGrey },
                      ]}
                    >
                      Male | Age 63 | 3rd Dec 1954
                    </Text>
                  </View>
                </View>
                <View style={[GlobalStyles.rowContainer, styles.mb20]}>
                  <Image width={15} height={15} source={CalendarImg} />
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
                </View>
                <View style={GlobalStyles.rowContainer}>
                  <Image
                    source={NoteImg}
                    width={20}
                    height={25}
                    style={{ marginRight: 10 }}
                  />
                  <TextInput
                    multiline
                    numberOfLines={5}
                    onChangeText={(text) => setNote(text)}
                    value={note}
                    style={styles.inputText}
                    placeholder="Note..."
                  />
                </View>
              </View>
              <View style={styles.submitBtnContent}>
                <TouchableOpacity
                  style={[
                    GlobalStyles.defaultButton,
                    GlobalStyles.rowContainer,
                    { backgroundColor: Colors.mainBlue },
                  ]}
                >
                  <Image
                    style={{ width: 15, height: 15, marginRight: 10 }}
                    source={CheckImg}
                  />
                  <Text
                    style={[
                      GlobalStyles.font14,
                      GlobalStyles.defaultFontFamily,
                      { color: "white" },
                    ]}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={[styles.container, styles.justifyBetween]}>
              <TouchableOpacity style={GlobalStyles.rowContainer}>
                <Image
                  source={BackImg}
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
                <Text
                  style={[
                    GlobalStyles.font16,
                    GlobalStyles.fontBold,
                    GlobalStyles.defaultFontFamily,
                  ]}
                >
                  New Appointment
                </Text>
              </TouchableOpacity>
              <View style={[styles.container, styles.justifyEnd]}>
                <View style={styles.mainContent}>
                  <Text
                    style={[
                      GlobalStyles.font24,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                    ]}
                  >
                    For whom would you like to create an appointment?
                  </Text>
                  <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    cancelText="Cancel"
                    cancelTextStyle={GlobalStyles.font20}
                    onChange={(option) => {
                      setAppointment(option.label);
                    }}
                    optionTextStyle={GlobalStyles.font20}
                    searchTextStyle={GlobalStyles.font20}
                    searchStyle={{ paddingVertical: 10, borderWidth: 0 }}
                  >
                    <TouchableOpacity
                      style={[
                        GlobalStyles.defaultFontFamily,
                        styles.inputButton,
                      ]}
                      placeholder="Search Drug..."
                      value={appointment}
                    >
                      <View style={GlobalStyles.rowContainer}>
                        <Image source={PersonImg} width={25} height={20} />
                        <View style={{ marginLeft: 10 }}>
                          <Text
                            style={[
                              GlobalStyles.font20,
                              GlobalStyles.defaultFontFamily,
                            ]}
                          >
                            {appointment}
                          </Text>
                          <Text
                            style={[
                              GlobalStyles.font14,
                              GlobalStyles.defaultFontFamily,
                              { color: Colors.lightGrey },
                            ]}
                          >
                            Male | Age 63 | 3rd Dec 1954
                          </Text>
                        </View>
                      </View>
                      <Image source={DropDownImg} width={25} height={20} />
                    </TouchableOpacity>
                  </ModalSelector>
                </View>
                <View style={styles.mainContent}>
                  <Text
                    style={[
                      GlobalStyles.font24,
                      GlobalStyles.defaultFontFamily,
                      GlobalStyles.fontBold,
                      { marginBottom: 10 },
                    ]}
                  >
                    When would you like to schedule the appointment?
                  </Text>
                  <TouchableOpacity
                    style={[styles.inputButton]}
                    onPress={handleShowCalendar}
                  >
                    <View style={GlobalStyles.rowContainer}>
                      <Image width={15} height={15} source={CalendarImg} />

                      <DateTimePickerModal
                        isVisible={calendarShow}
                        mode="date"
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
                    </View>
                    <Image width={15} height={15} source={DropDownImg} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => setReady(true)}>
                  <Text>testtest</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        <View style={GlobalStyles.inputContent}>
          <Footer />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    padding: 30,
    height: "100%",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  mainContent: {
    marginBottom: 20,
  },
  inputButton: {
    marginTop: 15,
    paddingHorizontal: 15,
    height: 60,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  submitContainer: {
    padding: 15,
    borderRadius: 10,
    display: "flex",
    width: "80%",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  inputText: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    width: "80%",
  },
  mb20: {
    marginBottom: 20,
  },
  submitBtnContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});
