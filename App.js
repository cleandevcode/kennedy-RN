import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import Appointment from "./pages/Appointment/Appointment";
import SignIn from "./pages/SignIn/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store/index";

export default function App() {
  const Stack = createStackNavigator();
  const signed = false;

  const [fontsLoaded] = useFonts({ Poppins_400Regular });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Appointment" component={Appointment} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
  return <></>;
}
