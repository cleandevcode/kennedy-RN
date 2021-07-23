import * as TYPES from "../types";

var initvalues = {
  soapIndex: 0,
  currentStep: 1,
  noteDetails: [],
  // model: {
  //   question: '',
  //   answer: '',
  //   type: '',
  //   mandatory: false
  // },
  allSet: false,
  soapLength: 0,
  mandatory: true,
};

const soapNotesReducer = (state = initvalues, action) => {
  switch (action.type) {
    case TYPES.SET_SOAP_STEP:
      return { ...state, soapIndex: action.payload };
    case TYPES.SET_SOAP_DETAILS:
      return { ...state, noteDetails: action.payload };
    case TYPES.SET_SOAP_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    case TYPES.SET_SOAP_ALL:
      return { ...state, allSet: action.payload };
    case TYPES.SET_SOAP_LENGTH:
      return { ...state, soapLength: action.payload };
    case TYPES.SET_SOAP_MANDATORY_ITEM:
      return { ...state, mandatory: action.payload };
    default:
      return { ...state };
  }
};

export default soapNotesReducer;
