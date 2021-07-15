import * as TYPES from "../types";

var initValue = {
  data: null,
};

const prescriptionReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.UPDATE_PRESCRIPTION:
      return { ...state, prescription: action.payload };
    default:
      return { ...state };
  }
};

export default prescriptionReducer;
