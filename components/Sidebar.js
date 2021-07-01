import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MedicineImg from '../assets/medicine.svg';
import NoteImg from "../assets/note.svg";
import CalendarImg from "../assets/calendar.svg";
import SocketImg from "../assets/socket.svg";

const lists = [
    {
        id: 1,
        name: 'New Prescription',
        icon: MedicineImg,
        character: 'P'
    },
    {
        id: 2,
        name: 'Create a Note',
        icon: NoteImg,
        character: 'N'
    },
    {
        id: 3,
        name: 'Calendar',
        icon: CalendarImg,
        character: 'C'
    },
]

const Card = ({icon, name, desc, character}) => (
    <View style={styles.card}>
        <View style={styles.flexContainer}>
            <Image source={icon} style={styles.icon} />
            <View style={{marginLeft: 10}}>
                <Text style={styles.whiteText}>{name}</Text>
                {desc &&
                <Text style={{fontSize: 10, color: '#6a8ee8'}}>{desc}</Text>
                }
            </View>
        </View>
        {character &&
            <Text style={styles.character}>
                {character}
            </Text>
        }
        
    </View>
)

export default function Sidebar () {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>gojitech</Text>
                {
                    lists.map(item=>(
                        <Card 
                        key={item.id}
                        icon={item.icon}
                        name={item.name}
                        character={item.character}
                        />
                    ))
                }
            </View>
            <Card 
                icon={SocketImg}
                name="Dr.John Adams"
                desc="ABC Clinic"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00164E',
        display: 'flex',
        flexDirection: 'column',
        padding: 40,
        justifyContent: 'space-between',
    },
    logo: {
        fontSize: 18,
        color: 'white',
        marginBottom: 30
    },
    card: {
        backgroundColor: '#082671',
        height: 50,
        marginBottom: 20,
        borderRadius: 5,
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
        
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 15, 
        height: 15
    },
    character: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        backgroundColor: '#00164E',
        color: 'white',
        fontSize: 10,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    whiteText: {
        color: 'white'
    }

})