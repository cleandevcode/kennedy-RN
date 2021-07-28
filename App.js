import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store/index";

import {
  Appointment,
  SignIn,
  Note,
  Prescription,
  Calendar,
  Cart,
  History,
  PrescriptionSummary,
  CreateNote,
  SoapNote,
  CreateSoapNote,
} from "./pages";

const persistor = persistStore(store);

export default function App() {
  const Stack = createStackNavigator();
  const signed = false;

  const [fontsLoaded] = useFonts({ Poppins_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Appointment" component={Appointment} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Note" component={Note} />
            <Stack.Screen name="CreateNote" component={CreateNote} />
            <Stack.Screen name="Prescription" component={Prescription} />
            <Stack.Screen
              name="PrescriptionSummary"
              component={PrescriptionSummary}
            />
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="SoapNote" component={SoapNote} />
            <Stack.Screen name="CreateSoapNote" component={CreateSoapNote} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
  return <></>;
}
