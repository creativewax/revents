import { createReducer } from "../../app/common/utils/reducerUtils";
import { MODAL_OPEN, MODAL_CLOSE } from "./modalActions";

const initialState = null;

const openModal = (state, payload) => {
  const { type, props } = payload;
  return { type, props };
};

const closeModal = state => {
  return null;
};

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
