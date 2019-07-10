import { createReducer } from "../../app/common/utils/reducerUtils";
import { LOGIN_USER, SIGN_OUT_USER } from "./authActions";

const initialState = {
  authenticated: false,
  currentUser: null
};

const loginUser = (state, payload) => {
  const { creds } = payload;
  return {
    authenticated: true,
    currentUser: creds.email
  };
};

const signOutUser = () => {
  return {
    authenticated: false,
    currentUser: null
  };
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGN_OUT_USER]: signOutUser
});
