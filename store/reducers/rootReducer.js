import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

import authReducer from "./authReducer";
import patientReducer from "./patientReducer";
import prescriptionReducer from "./prescriptionReducer";
import soapNotesReducer from "./soapNoteReducer";

import { combineReducers } from "redux";

const patientConfig = {
  key: process.env.REACT_APP_STORAGE_KEY_PATIENT,
  storage: AsyncStorage,
  whitelist: ["patient"],
};

console.log("storage config>>>>", process.env);

const rootReducer = combineReducers({
  user: authReducer,
  patient: persistReducer(patientConfig, patientReducer),
  // patient: patientReducer,
  prescription: prescriptionReducer,
  soapNotes: soapNotesReducer,
});

export default rootReducer;
