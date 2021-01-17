import {
  AUTH_LOGIN,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_AUTH_SUCCESS,
  AUTH_SIGN_OUT_SUCCESS,
  AUTH_ADD_PROMOTION_TO_STATE,
  AUTH_UPDATE_PROMOTION,
  AUTH_DELETE_PROMOTION,
  AUTH_GET_LIMITED_PROMOTIONS_STATE,
  AUTH_DELETE_PROMOTION_FROM_STATE,
  AUTH_UPDATE_STATE_PROMOTION,
} from "../actions/constants";

const initialState = {
  token: "",
  isLogin: false,
  authData: {},
  signOuting: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state };
    case AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        authData: { ...action.payload },
      };
    case AUTH_AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLogin: true,
      };
    case AUTH_SIGN_OUT_SUCCESS:
      return {
        ...state,
        token: "",
        authData: {},
        isLogin: false,
      };
    default:
      return state;
  }
};
