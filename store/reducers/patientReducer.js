import * as TYPES from "../types";

var initValue = {
  patient: null,
};

const patientReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.SET_PATIENT:
      return { ...state, patient: action.payload };
    default:
      return { ...state };
  }
};

export default patientReducer;
