import * as TYPES from "../types";

var initValue = {
  isAuthorized: false,
  profile: null,
};

const authReducer = (state = initValue, action) => {
  switch (action.type) {
    case TYPES.AUTH_PROFILE:
      return { ...state, profile: action.payload };
    case TYPES.SET_AUTH:
      return { ...state, isAuthorized: action.payload };
    default:
      return { ...state };
  }
};

export default authReducer;
