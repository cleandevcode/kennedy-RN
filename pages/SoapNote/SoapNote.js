import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import GlobalStyles from "../../style/globalStyle";
import {
  SideBar2,
  Footer,
  SideBar,
  Header,
  SearchPatient,
  ChooseTemplate,
} from "../../components";
import * as Colors from "../../style/color";
import CreateNotes from "./CreateNotes";

const suggested = [
  {
    id: 1,
    name: "Encounter Note",
  },
  {
    id: 2,
    name: "Hypertension",
  },
];

const others = [
  {
    id: 1,
    name: "Hypertension",
  },
  {
    id: 2,
    name: "Hypertension",
  },
  {
    id: 3,
    name: "Hypertension",
  },
  {
    id: 4,
    name: "Hypertension",
  },
  {
    id: 5,
    name: "Hypertension",
  },
  {
    id: 6,
    name: "Hypertension",
  },
  {
    id: 7,
    name: "Hypertension",
  },
  {
    id: 8,
    name: "Hypertension",
  },
];

const testJSON = {
  S: [
    { question: "This is test question S1", mandatory: true, type: "string" },
    { question: "This is test question S2", mandatory: false, type: "number" },
    { question: "This is test question S3", mandatory: true, type: "boolean" },
    { question: "This is test question S4", mandatory: true, type: "string" },
  ],
  O: [
    { question: "This is test question O1", mandatory: true, type: "number" },
    { question: "This is test question O2", mandatory: true, type: "number" },
    { question: "This is test question O3", mandatory: false, type: "boolean" },
    { question: "This is test question O4", mandatory: true, type: "string" },
  ],
  A: [
    { question: "This is test question A1", mandatory: true, type: "number" },
    { question: "This is test question A2", mandatory: true, type: "number" },
    { question: "This is test question A3", mandatory: true, type: "boolean" },
    { question: "This is test question A4", mandatory: true, type: "string" },
  ],
  P: [
    { question: "This is test question P1", mandatory: false, type: "number" },
    { question: "This is test question P2", mandatory: true, type: "number" },
    { question: "This is test question P3", mandatory: true, type: "boolean" },
    { question: "This is test question P4", mandatory: false, type: "string" },
  ],
};

export default function SoapNote() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [template, setTemplate] = useState("");
  const [data, setData] = useState([]);
  const [answer, setAnswer] = useState("");
  const [isProcess, setProcess] = useState(false);
  const [loading, setLoading] = useState(false);

  const patient = useSelector((state) => state.patient.patient);

  const currentStep = useSelector((state) => state.soapNotes.currentStep);
  const totalSteps = useSelector((state) => state.soapNotes.soapLength);
  const stepIdx = useSelector((state) => state.soapNotes.soapIndex);
  const noteDetails = useSelector((state) => state.soapNotes.noteDetails);
  const template = useSelector((state) => state.soapNotes.template);

  console.log("templates>>>>>>>>>>>>", template);

  const handleTemplate = (item) => {
    // let params = {
    //   data: data,
    //   answer: answer,
    // };
    // navigation.navigate("CreateSoapNote", params);
  };

  useEffect(() => {
    calcStepRange(testJSON);

    dispatch({
      type: "SET_SOAP_DETAILS",
      payload: testJSON,
    });
  }, []);

  const calcStepRange = (json) => {
    setLoading(true);
    let result = [];
    let length = 0;
    for (let i = 0; i < Object.keys(json).length; i++) {
      result.push({
        key: Object.keys(json)[i],
        values: Object.values(json)[i],
        length: Object.values(json)[i].length,
        from: i == 0 ? i + 1 : result[i - 1].to + 1,
        to:
          i == 0
            ? Object.values(json)[i].length
            : result[i - 1].to + Object.values(json)[i].length,
      });
      if (i == Object.keys(json).length - 1)
        length = result[i - 1].to + 1 + Object.values(json)[i].length;
    }
    setData(result);
    dispatch({
      type: "SET_SOAP_LENGTH",
      payload: length,
    });
    setLoading(false);
  };

  console.log("000data>>>>", data);

  const handleAnswers = (answer) => {
    setAnswer(answer);

    const keys = ["S", "O", "A", "P"];

    if (currentStep < totalSteps) {
      dispatch({
        type: "SET_SOAP_CURRENT_STEP",
        payload: currentStep + 1,
      });
      noteDetails[keys[stepIdx]][currentStep - data[stepIdx].from].answer =
        answer;
      dispatch({
        type: "SET_SOAP_DETAILS",
        payload: noteDetails,
      });
    }
  };

  const handleKeyPress = (text) => {};

  const handleSetProcess = (process) => {
    setProcess(process);
  };

  console.log("loading>>>>", loading);

  const MainRender = () => {
    if (loading) {
      return <ActivityIndicator size="large" color={Colors.mainBlue} />;
    } else if (!loading && data && data.length > 0) {
      return (
        <CreateNotes
          data={data}
          answer={answer}
          handleEditAnswer={handleAnswers}
        />
      );
    } else {
      return <></>;
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.sidebar}>
        <SideBar2 />
      </View>
      <View style={GlobalStyles.mainContainer}>
        <View style={GlobalStyles.content}>
          <Header />
          {patient === null ? (
            <SearchPatient />
          ) : (
            <View style={styles.container}>
              {template.length == 0 ? (
                <ChooseTemplate
                  suggested={suggested}
                  others={others}
                  handleTemplate={handleTemplate}
                  title="New Note"
                  description="Choose a Template"
                />
              ) : (
                <MainRender />
              )}
            </View>
          )}
        </View>
        <View style={GlobalStyles.inputContent}>
          <Footer handleText={handleAnswers} handleKeyPress={handleKeyPress} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
