import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import CalendarImg from "../../assets/calendar.svg";
import Modal from 'react-native-modal'

export default function AppointmentModal({show, handleShow}) {
    
    return (
        <Modal isVisible={show}>
            <View style={styles.container}>
                <Text style={[styles.title, styles.marginBotton20]}>New Appointment</Text>
                <Text style={[styles.fontSize14, styles.fontBold, styles.marginBotton20]}>Full Name</Text>
                <TextInput style={[styles.textInput, styles.marginBotton20]}   />
                <Text style={[styles.fontSize14, styles.fontBold, styles.marginBotton20]}>Reason for Visit</Text>
                <TextInput style={[styles.textInput, styles.marginBotton20]}   />
                <Text style={[styles.fontSize14, styles.fontBold, styles.marginBotton20]}>Date & Time</Text>
                <View>
                    <TouchableOpacity style={[styles.cancel, styles.button]} onPress={handleShow}><Text>Cancel</Text></TouchableOpacity>                
                    <TouchableOpacity style={[styles.save, styles.button]}><Text>Save</Text></TouchableOpacity>                
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 30,
        backgroundColor: 'white',
        padding: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    fontSize14: {
        fontSize: 14,
    },
    fontSize12: {
        fontSize: 12
    },
    fontBold: {
        fontWeight: 'bold'
    },
    calendar: {
        width: 15,
        height: 15,
        marginRight: 15
    },
    textInput: {
        height: 80
    },
    marginBotton20: {
        marginBottom: 20
    },
    button: {
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    cancel: {
        backgroundColor: '#ededed',
        color: 'black',
    },
    save: {
        backgroundColor: '#00164E',
        color: 'white',
    }
})