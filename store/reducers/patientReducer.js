import * as TYPES from "../types";

var initValue = {
  patient: null,
  patients: [],
};

const patientReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.UPDATE_PATIENT:
      return { ...state, patient: action.payload };
    case TYPES.UPDATE_PATIENTS:
      return { ...state, patients: action.payload };
    default:
      return { ...state };
  }
};

export default patientReducer;
