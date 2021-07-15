import React, { useState } from 'react';
import {View, StyleSheet, Image,Text, TouchableOpacity, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import CheckImg from "../../assets/roundCheck.png";
import * as Colors from "../../style/color";
import GlobalStyles from '../../style/globalStyle';

export default function NoteModal({show, handleShow}) {
    const [title, setTitle] = useState("");

    return (
        <Modal isVisible={show} style={styles.modal}>
            <View style={styles.inlineEnd}>
                <TouchableOpacity style={[GlobalStyles.defaultButton, GlobalStyles.rowContainer, {backgroundColor: Colors.mainBlue}]} onPress={handleShow}>
                    <Image style={{width: 15, height: 15, marginRight: 10}} source={CheckImg} />
                    <Text style={[GlobalStyles.font14, GlobalStyles.defaultFontFamily, {color: 'white'}]}>Save</Text>
                </TouchableOpacity>
            </View>
            <TextInput 
                placeholder="Add a title..."
                value={title}
                onChangeText={(value)=>setTitle(value)}
                style={[styles.input, GlobalStyles.defaultFontFamily]}
            />
            <Text style={[GlobalStyles.font12, GlobalStyles.defaultFontFamily, {marginTop: 20}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet eros vel nunc sollicitudin tincidunt. Suspendisse nec tristique risus. Vivamus vestibulum neque tempor est suscipit convallis a in neque. Curabitur elementum eros et dui congue cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet eros vel nunc sollicitudin tincidunt. Suspendisse nec tristique risus. Vivamus vestibulum neque tempor est suscipit convallis a in neque. Curabitur elementum eros et dui congue cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet eros vel nunc sollicitudin tincidunt. Suspendisse nec tristique risus. Vivamus vestibulum neque tempor est suscipit convallis a in neque. Curabitur elementum eros et dui congue cursus. 
            </Text>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        margin: 30, // This is the important style you need to set
        alignItems: undefined,
        justifyContent: undefined,
        flex: 1,
        padding: 30,
        borderRadius: 10
    },
    inlineEnd: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:"flex-end"
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGrey,
        fontSize: 16,
    }
})