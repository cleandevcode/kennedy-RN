import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {Poppins_400Regular} from '@expo-google-fonts/poppins';
import Sidebar from './components/Sidebar';
import Appointment from './pages/Appointment/Appointment';
import Footer from './components/Footer';
import AppointmentModal from './pages/Appointment/AppointmentModal';
// import Modal from 'react-native-modal'


export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular });
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  if (!fontsLoaded) { 
    return <AppLoading /> 
  }

  return (
    <View style={{flex: 1, fontFamily: 'Poppins_400Regular'}}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}
// export default function App() {
//   const [show, setShow] = useState(false);

//   const handleShow = () => {
//     setShow(!show)
//   }

//   return (
//     <View style={{flex: 1}}>
//       <View style={styles.container}>
//         <View style={styles.sidebar}>
//           <Sidebar />
//         </View>
//         <View style={styles.mainContainer}>
//           <View style={styles.content}>
//             <Appointment handleShowModal={handleShow} />
//           </View>
//           <View style={styles.inputContent}>
//             <Footer />
//           </View>
//         </View>
//       </View>
//       <Modal show={false}>
//     <View style={{height: 100, width: 100, backgroundColor: 'red'}}>

//     </View>
//       </Modal>
//       {/* <AppointmentModal show={show} handleShow={handleShow} /> */}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  sidebar: {
    width: '30%',
    height: '100%'
  },
  mainContainer: {
    width: '70%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    height: '85%'
  },
  inputContent: {
    height: '15%'
  }
});
