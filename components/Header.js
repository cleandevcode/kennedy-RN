import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import GlobalStyles from "../style/globalStyle";
import LogoutImg from "../assets/logout.png";
import SocketImg from "../assets/socket_big.png";
import SwitchImg from "../assets/switch.png";

import * as Colors from "../style/color";

const GeneralInfo = () => {
  const patient = useSelector((state) => state.patient.patient);

  if (patient !== null) {
    const { address, city, postal, province } = patient.address;
    return (
      <View>
        <View style={[GlobalStyles.rowContainer, styles.marginBottom10]}>
          <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}>
            Address:{" "}
          </Text>
          <Text
            style={[
              GlobalStyles.font14,
              GlobalStyles.defaultFontFamily,
              GlobalStyles.fontBold,
            ]}
          >
            {formatText(address)}
          </Text>
        </View>
        <View style={[GlobalStyles.rowContainer, styles.marginBottom10]}>
          <View style={GlobalStyles.rowContainer}>
            <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}>
              City:{" "}
            </Text>
            <Text
              style={[
                GlobalStyles.font14,
                GlobalStyles.defaultFontFamily,
                GlobalStyles.fontBold,
              ]}
            >
              {formatText(city)}
            </Text>
          </View>
          <View style={[GlobalStyles.rowContainer, { marginLeft: 15 }]}>
            <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}>
              Province:{" "}
            </Text>
            <Text
              style={[
                GlobalStyles.font14,
                GlobalStyles.defaultFontFamily,
                GlobalStyles.fontBold,
              ]}
            >
              {formatText(province)}
            </Text>
          </View>
        </View>
        <View style={[GlobalStyles.rowContainer, styles.marginBottom10]}>
          <View style={GlobalStyles.rowContainer}>
            <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}>
              Phone:{" "}
            </Text>
            <Text
              style={[
                GlobalStyles.font14,
                GlobalStyles.defaultFontFamily,
                GlobalStyles.fontBold,
              ]}
            >
              {formatText(patient.phone)}
            </Text>
          </View>
          <View style={[GlobalStyles.rowContainer, { marginLeft: 15 }]}>
            <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}>
              Alternate Phone:{" "}
            </Text>
            <Text
              style={[
                GlobalStyles.font14,
                GlobalStyles.defaultFontFamily,
                GlobalStyles.fontBold,
              ]}
            >
              N/A
            </Text>
          </View>
        </View>
        <View style={[GlobalStyles.rowContainer, styles.marginBottom10]}>
          <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}>
            Email:{" "}
          </Text>
          <Text
            style={[
              GlobalStyles.font14,
              GlobalStyles.defaultFontFamily,
              GlobalStyles.fontBold,
            ]}
          >
            {formatText(patient.email)}
          </Text>
        </View>
        <View style={[GlobalStyles.rowContainer, styles.marginBottom10]}>
          <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}>
            Official Language:{" "}
          </Text>
          <Text
            style={[
              GlobalStyles.font14,
              GlobalStyles.defaultFontFamily,
              GlobalStyles.fontBold,
            ]}
          >
            {formatText(patient.officialLanguage)}
          </Text>
        </View>
      </View>
    );
  }

  return <View></View>;
};

const History = () => {
  return (
    <View>
      <Text>Prescription History</Text>
    </View>
  );
};

const Appointments = () => {
  return (
    <View>
      <Text>Appointments</Text>
    </View>
  );
};

const Category = ({ lists, selectedCategory, handleSelectCategory }) => {
  return (
    <View style={{ marginTop: 10 }}>
      {lists.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.categoryItem,
            {
              backgroundColor:
                selectedCategory === index ? Colors.mediumGrey : Colors.white,
            },
          ]}
          onPress={() => handleSelectCategory(item.id)}
        >
          <Text
            style={[
              GlobalStyles.font14,
              GlobalStyles.fontBold,
              GlobalStyles.defaultFontFamily,
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Content = ({ selectedId }) => {
  if (selectedId === 0) {
    return <GeneralInfo />;
  } else if (selectedId === 1) {
    return <History />;
  } else if (selectedId === 2) {
    return <Appointments />;
  } else {
    return <View />;
  }
};

const PatientDetail = () => {
  const lists = [
    {
      id: 0,
      title: "General Info",
    },
    {
      id: 1,
      title: "Prescription History",
    },
    {
      id: 2,
      title: "Appointments",
    },
  ];

  const [selectedCategory, setCategory] = useState(0);

  const handleCategory = (id) => {
    setCategory(id);
  };

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.categoryContainer}>
        <Category
          lists={lists}
          selectedCategory={selectedCategory}
          handleSelectCategory={handleCategory}
        />
      </View>
      <View style={styles.contentContainer}>
        <Content selectedId={selectedCategory} />
      </View>
    </View>
  );
};

const formatText = (data) => {
  return data ? data : "N/A";
};

export default function Header() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const patient = useSelector((state) => state.patient.patient);

  const handleChangePatient = () => {
    dispatch({
      type: "UPDATE_PATIENT",
      payload: null,
    });
  };

  if (patient !== null) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={GlobalStyles.rowContainer}>
              <TouchableOpacity onPress={() => setShow(!show)}>
                <Text
                  style={[
                    GlobalStyles.font20,
                    GlobalStyles.defaultFontFamily,
                    GlobalStyles.fontBold,
                  ]}
                >
                  {patient.firstName} {patient.lastName}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={handleChangePatient}
              >
                <Image source={SwitchImg} width={15} height={15}></Image>
              </TouchableOpacity>
            </View>
            <Text
              style={[
                GlobalStyles.font14,
                GlobalStyles.defaultFontFamily,
                { color: "grey" },
              ]}
            >
              DOB : {patient.dateOfBirth} {"  "} Gender : {patient.sex} {"  "}
              Phone:
              {formatText(patient.phone)}
            </Text>
          </View>
          <View style={GlobalStyles.rowContainer}>
            <View
              style={[
                GlobalStyles.rowContainer,
                {
                  backgroundColor: Colors.grey,
                  marginRight: 10,
                  width: 150,
                  padding: 10,
                  borderRadius: 8,
                },
              ]}
            >
              <Image source={SocketImg} style={[{ width: 20, height: 25 }]} />
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: 10,
                }}
              >
                <Text
                  style={[
                    GlobalStyles.fontBold,
                    GlobalStyles.defaultFontFamily,
                    GlobalStyles.font14,
                  ]}
                >
                  Dr. Test Test
                </Text>
                <Text
                  style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}
                >
                  KMC
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.imageContainer, { backgroundColor: Colors.grey }]}
            >
              <Image source={LogoutImg} style={styles.logoutImg} />
            </TouchableOpacity>
          </View>
        </View>
        {show && <PatientDetail />}
      </>
    );
  }
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  topContainer: {
    display: "flex",
  },
  logoutImg: {
    width: 20,
    height: 20,
  },
  imageContainer: {
    padding: 20,
    borderRadius: 8,
  },
  detailsContainer: {
    borderTopColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 110,
    height: "70%",
    backgroundColor: "white",
    zIndex: 99,
    width: "100%",
  },
  categoryContainer: {
    width: "30%",
    display: "flex",
    paddingRight: 15,
  },
  contentContainer: {
    width: "70%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderLeftColor: Colors.mediumGrey,
    borderLeftWidth: 1,
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  marginBottom10: {
    marginBottom: 10,
  },
});
