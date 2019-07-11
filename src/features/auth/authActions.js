import { closeModal } from "../modals/modalActions";
import { delay } from "q";
import { asyncActionStart, asyncActionFinished } from "../async/asyncActions";

/*
 * action types
 */

export const LOGIN_USER = "LOGIN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

/*
 * action creators
 */

export const login = (creds) => {
  return async dispatch => {
    dispatch({
      type: LOGIN_USER,
      payload: {
        creds
      }
    });
    dispatch(asyncActionStart());
    await delay(1000)
    dispatch(asyncActionFinished());
    dispatch(closeModal());
  };
}

export function logout() {
  return {
    type: SIGN_OUT_USER
  };
}
