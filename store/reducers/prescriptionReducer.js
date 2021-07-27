import * as TYPES from "../types";

var initValue = {
  prescription: null,
  drugs: [],
};

const prescriptionReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.UPDATE_PRESCRIPTION:
      return { ...state, prescription: action.payload };
    case TYPES.SET_DRUG_CANDIDATES:
      return { ...state, drugs: action.payload };
    default:
      return { ...state };
  }
};

export default prescriptionReducer;
