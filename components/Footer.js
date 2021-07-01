import React from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import MicImg from '../assets/mic.svg';


export default function Footer() {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Tap the mic to begin" style={styles.textInput} />
            <TouchableOpacity>
                <Image source={MicImg} style={styles.mic} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    textInput: {
        width: '90%',
        fontSize: 20,
        fontWeight: 'bold',
        width: '100%',
        paddingRight: 20,
    },
    mic: {
        width: 60,
        height: 60
    }
})