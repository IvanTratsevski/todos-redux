import { USER } from "../actions/types";
const initialState = {
  authError: null,
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
        authError: null,
      };
    case USER.USER_LOGIN:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLoggedIn: true,
        uId: action.payload.currentUser.uid,
        uEmail: action.payload.currentUser.email,
        authError: null,
      };
    case USER.USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
        uId: null,
        uEmail: null,
        uName: null,
        authError: null
      };
    case USER.USER_ERROR:
      return {
        ...state,
        authError: action.payload.authError,
      }
    default:
      return state;
  }
};
