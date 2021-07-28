import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { createNotes } from "../../service/base.service";
import * as Colors from "../../style/color";
import GlobalStyles from "../../style/globalStyle";

import CheckImg from "../../assets/roundCheck.png";

const themes = [
  {
    id: 1,

    name: "Subjective",
  },
  {
    id: 2,

    name: "Objective",
  },
  {
    id: 3,

    name: "Assessment",
  },
  {
    id: 4,

    name: "Plan",
  },
];

const MainContainer = (details) => (
  <>
    {details.map((item, idx) => (
      <View key={idx}>
        <Text
          style={[
            GlobalStyles.fontBold,
            GlobalStyles.font14,
            GlobalStyles.defaultFontFamily,
          ]}
        >
          {item.question}
        </Text>
        <Text style={[GlobalStyles.font12, GlobalStyles.defaultFontFamily]}>
          {item.answer}
        </Text>
      </View>
    ))}
  </>
);

export default function Summary() {
  const navigation = useNavigation();
  const noteDetails = useSelector((state) => state.soapNotes.noteDetails);
  const template = useSelector((state) => state.soapNotes.template);
  const patient = useSelector((state) => state.patient.patient);

  const prepareRequest = (obj) => {
    let result = template + "\n\n";

    Object.values(obj).map((item) =>
      item.map((ele) => (result += ele.question + "\n" + ele.answer + "\n"))
    );

    return result;
  };

  const handleSave = () => {
    const param = {
      demographicNo: patient.demographicNo,
      note: prepareRequest(noteDetails),
      observationDate: new Date(),
      soapNote: { title: template, notes: noteDetails },
    };
    createNotes(param)
      .then((res) => {
        if (res && res.status === 201) {
          navigation.navigate("Note");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView>
      {Object.keys(noteDetails).map((item, idx) => (
        <View key={idx} style={{ marginTop: 20 }}>
          <Text
            style={[
              GlobalStyles.fontBold,
              GlobalStyles.defaultFontFamily,
              GlobalStyles.font14,
              { color: Colors.note_title },
            ]}
          >
            {themes[idx].name}
          </Text>
          <View>{MainContainer(Object.values(noteDetails)[idx])}</View>
        </View>
      ))}
      <View style={styles.save}>
        <TouchableOpacity
          style={[
            GlobalStyles.rowContainer,
            GlobalStyles.defaultButton,
            { backgroundColor: Colors.mainBlue },
          ]}
          onPress={handleSave}
        >
          <Image
            style={{ width: 15, height: 15, marginRight: 10 }}
            source={CheckImg}
          />
          <Text
            style={[
              GlobalStyles.defaultFontFamily,
              GlobalStyles.font12,
              { color: Colors.white },
            ]}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  save: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
