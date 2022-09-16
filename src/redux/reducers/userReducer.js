import { USER } from "../actions/types";
const initialState = {
  isLoggedIn: false,
  currentUser: null,
  uId: null,
  uEmail: null,
  uName: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.USER_REGISTER:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLoggedIn: true,
        uId: action.payload.currentUser.uid,
        uEmail: action.payload.currentUser.email,
      };
    case USER.USER_LOGIN:
      return {
        ...state,
        currentUser: action.currentUser,
        isLoggedIn: true,
        uId: action.currentUser.uid,
        uEmail: action.currentUser.email,
      };
    case USER.USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        uId: null,
        uEmail: null,
        uName: null,
      };
    default:
      return state;
  }
};
