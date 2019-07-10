/*
 * action types
 */

export const LOGIN_USER = "LOGIN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

/*
 * action creators
 */

export function login(creds) {
  return {
    type: LOGIN_USER,
    payload: {
      creds
    }
  };
}

export function logout() {
  return {
    type: SIGN_OUT_USER
  };
}
