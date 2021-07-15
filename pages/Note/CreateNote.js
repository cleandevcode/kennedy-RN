import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import GlobalStyles from "../../style/globalStyle";
import { SideBar2, Footer, SideBar } from "../../components";
import BackImg from "../../assets/back.png";
import NoteModal from "./NoteModal";

export default function CreateNote() {
    const navigation = useNavigation();
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }

    return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.sidebar}>
        <SideBar2 />
      </View>
      <View style={GlobalStyles.mainContainer}>
        <View style={GlobalStyles.content}>
          <View style={[styles.container]}>
            <TouchableOpacity style={[GlobalStyles.rowContainer]} onPress={()=>navigation.navigate("Note")}>
                <Image source={BackImg} style={{width: 20, height: 20, marginRight: 10}} />
                <Text style={[GlobalStyles.font16, GlobalStyles.fontBold, GlobalStyles.defaultFontFamily]}>New Note</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShow}>
              <Text style={[GlobalStyles.font18, GlobalStyles.fontBold, GlobalStyles.defaultFontFamily]}>What do you want the note to say?</Text>
              <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily]}>testtest</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={GlobalStyles.inputContent}>
          <Footer />
        </View>
      </View>
      <NoteModal 
        show={show}
        handleShow={handleShow}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    display: 'flex',
    justifyContent: 'space-between'
  },
});
