/*
 * references
 */

export const LOGIN_MODAL = "LoginModal";
export const REGISTER_MODAL = "RegisterModal";
export const TEST_MODAL = "TestModal";

/*
 * action types
 */

export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";

/*
 * action creators
 */

export function openModal(type, props) {
  return {
    type: MODAL_OPEN,
    payload: {
      type,
      props
    }
  };
}

export function closeModal() {
  return {
    type: MODAL_CLOSE
  };
}
