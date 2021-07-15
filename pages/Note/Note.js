import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import GlobalStyles from "../../style/globalStyle";
import { SideBar2, Footer, SideBar, Header } from "../../components";
import * as Colors from "../../style/color"
import ListItem from "./ListItem";

import AddImg from "../../assets/plus.png"
import CalendarImg from "../../assets/calendar1.png";
import YellowCalendarImg from "../../assets/calendar_yellow.png";

const lists = [
  {
    id: 0,
    title: "Follow-up bypass surgery",
    date: "23rd May 2021",
    description: "S:Mr.0 is a 63 y/0 roan seen........",
    content:
      "<p>S: Mr. 0 is a 63 y/o roan seen today for follow-up 4 weeks after undergoing cardiac bypass surgery and for his hypertension. It was bad no episodes of chest pain consistent with previous angina. I have had only minimal ', Retching.' chest discomfort at the site of his surgical incision on his them wall. Mr. 0 describes no DOE and is able to take a brisk 2.3-mile walk daily without symptoms. He describes no IND or °Moyne. He reports no edema or any pam in his mires when exercising.</p><p>MI. 0 has ken *king his blood pressure twice a week. His values ■Ift usually 130- 1604045. He has not experienced side effects him his medications. His past history is significant for CAD. MI in 1992 a hypercholesterolemia He also has hypertension. Hr mcd.c.ons ■include lia,ogri120 mg daily. Renoir 50 mg daily, - atorvastatin 80 mg dally and ASA 325 mg daily. He and M wife have been adlming to a low.. Mediterranean diet.</p><p>0: Generally. Mr. 0 is an elderly male, appearing younger than his slated age P 60 reg. BP 132/7g, ICI 5. Mr% AR-20016s, BNB - 28.7 Neel: No /VD. 2+ mrolids, no bruits Lungs'. CREAM auscultation Chest wall, healing midline mar without erythema or discharge. CV: RAP, NL SI and S2, no rnumiurs Extremities, Incision Rom vein harvest on R medial calf is healing without erythema Or Posterior tibial and (loam podia pulses are 2- bilaterally. No edema. 63mama for folio. .up after some, andfor hYPeensa. - NI.yto Con roa,. art, Rm. brw..remr. Doing well without angina or shortness of Meath. Good exercise Tolman.. IN2. Hypevermon, well controlled on atemlol, since BP hest than wino.</p>",
  },
  {
    id: 1,
    title: "HTN Report",
    date: "6th April 2021",
    description: "No past history other than hypertension...",
    content:
      " lorem ipsum orem psumorem ipsumorem ipsumorem ipsumorem ipsumorem ipSneak peak on note contents lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ip....................",
  },
  {
    id: 2,
    title: "Diabetes Follow-up",
    date: "2nd March 2021",
    description: "Generally healthy appearing.....",
    content:
      " lorem ipsum orem psumorem ipsumorem ipsumorem ipsumorem ipsumorem ipSneak peak on note contents lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ip....................",
  },{
    id: 3,
    title: "Follow-up bypass surgery",
    date: "23rd May 2021",
    description: "S:Mr.0 is a 63 y/0 roan seen........",
    content:
      "<p>S: Mr. 0 is a 63 y/o roan seen today for follow-up 4 weeks after undergoing cardiac bypass surgery and for his hypertension. It was bad no episodes of chest pain consistent with previous angina. I have had only minimal ', Retching.' chest discomfort at the site of his surgical incision on his them wall. Mr. 0 describes no DOE and is able to take a brisk 2.3-mile walk daily without symptoms. He describes no IND or °Moyne. He reports no edema or any pam in his mires when exercising.</p><p>MI. 0 has ken *king his blood pressure twice a week. His values ■Ift usually 130- 1604045. He has not experienced side effects him his medications. His past history is significant for CAD. MI in 1992 a hypercholesterolemia He also has hypertension. Hr mcd.c.ons ■include lia,ogri120 mg daily. Renoir 50 mg daily, - atorvastatin 80 mg dally and ASA 325 mg daily. He and M wife have been adlming to a low.. Mediterranean diet.</p><p>0: Generally. Mr. 0 is an elderly male, appearing younger than his slated age P 60 reg. BP 132/7g, ICI 5. Mr% AR-20016s, BNB - 28.7 Neel: No /VD. 2+ mrolids, no bruits Lungs'. CREAM auscultation Chest wall, healing midline mar without erythema or discharge. CV: RAP, NL SI and S2, no rnumiurs Extremities, Incision Rom vein harvest on R medial calf is healing without erythema Or Posterior tibial and (loam podia pulses are 2- bilaterally. No edema. 63mama for folio. .up after some, andfor hYPeensa. - NI.yto Con roa,. art, Rm. brw..remr. Doing well without angina or shortness of Meath. Good exercise Tolman.. IN2. Hypevermon, well controlled on atemlol, since BP hest than wino.</p>",
  },
];

export default function Note() {
  const navigation = useNavigation();
  const [selectedIndex, setIndex] = useState(0);

  const handleClick = (id) => {
    setIndex(id)
  }

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.sidebar}>
        <SideBar2 />
      </View>
      <View style={GlobalStyles.mainContainer}>
        <Header />
        <View style={GlobalStyles.content}>
          <View style={styles.container}>
            <View style={[GlobalStyles.rowContainer, {justifyContent: 'space-between', marginBottom: 20}]}>
              <Text style={[GlobalStyles.font24, GlobalStyles.defaultFontFamily, GlobalStyles.fontBold]}>Notes</Text>
              <TouchableOpacity style={[GlobalStyles.defaultButton,GlobalStyles.radius20,  GlobalStyles.rowContainer, {backgroundColor: Colors.mainBlue}]} onPress={()=>navigation.navigate("CreateNote")}>
                <Image source={AddImg} style={{width: 15, height: 15}} />
                <Text
                    style={
                    [GlobalStyles.font16,
                      GlobalStyles.defaultFontFamily,
                      { color: "white", marginLeft: 10 }
                    ]}
                  >
                    New
                </Text>
              </TouchableOpacity>
            </View>
            <View style={GlobalStyles.rowContainer}>
              <ScrollView style={[GlobalStyles.radius8, {width: '38%', backgroundColor: Colors.white, padding: 10, marginRight: '2%'}]}>
                {lists.map((list, idx) => (
                  <ListItem
                    key={idx}
                    index={selectedIndex}
                    data={list}
                    handleClick={handleClick}
                  />
                ))}
              </ScrollView>
              <View style={[GlobalStyles.radius8, {width: '60%', height: '100%', backgroundColor: Colors.white, padding: 20}]}>
                  <View style={[GlobalStyles.rowContainer, {justifyContent: 'space-between'}]}>
                    <View style={[GlobalStyles.rowContainer, {marginBottom: 10}]}>
                      <Image source={CalendarImg} style={{width: 15, height: 15}} />
                      <Text style={[GlobalStyles.font14, {color: Colors.mainBlue, marginLeft: 10}]}>{lists[selectedIndex].date}</Text>
                    </View>
                    <TouchableOpacity style={[GlobalStyles.rowContainer, GlobalStyles.defaultButton, {backgroundColor: Colors.lightYellow}]}>
                      <Image source={YellowCalendarImg} style={{width: 12, height: 12}} />
                      <Text style={[GlobalStyles.font12, GlobalStyles.defaultFontFamily, {color: 'black', marginLeft: 5}]}>1 appointment on this day</Text>
                    </TouchableOpacity>
                  </View> 
                  <Text style={[GlobalStyles.font16, GlobalStyles.fontBold, GlobalStyles.defaultFontFamily]}>
                    {lists[selectedIndex].title}
                  </Text>
                  <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily, {marginTop: 20}]}>
                    {lists[selectedIndex].description}
                  </Text>
              </View>
            </View>
          </View>
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
    flex: 1,
    padding: 30
  },
});
