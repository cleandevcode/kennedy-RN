import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CalendarImg from "../../assets/calendar1.png";
import GlobalStyles from '../../style/globalStyle';
import * as Colors from "../../style/color";

export default function ListItem({index, data, handleClick}) {
    const { title, date, description, id } = data;
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: index === id ? '#F4F4F4' : 'white'}]} onPress={()=>handleClick(id)}>
            <View style={[GlobalStyles.rowContainer]}>
                <Image source={CalendarImg} style={{width: 15, height: 15, marginRight: 10}} />
                <Text style={[GlobalStyles.font14, GlobalStyles.fontBold, GlobalStyles.defaultFontFamily, {color: Colors.mainBlue}]}>{date}</Text>
            </View>
            <View style={[GlobalStyles.rowContainer, {paddingVertical: 10}]}>
                <Text style={[GlobalStyles.font14, GlobalStyles.fontBold, GlobalStyles.defaultFontFamily]}>{title}</Text>
            </View>
            <Text style={[GlobalStyles.font12, {marginBottom: 5}]}>{description}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 8
    }
})