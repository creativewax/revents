import { createReducer } from "../../app/common/utils/reducerUtils";
import { ASYNC_ACTION_START, ASYNC_ACTION_FINISHED, ASYNC_ACTION_ERROR } from "./asyncActions";

const initialState = {
  loading: false
};

const asyncActionStart = (state, payload) => {
  return {
    ...state,
    loading: true,
    elementName: payload
  };
};

const asyncActionFinished = state => {
  return {
    ...state,
    loading: false,
    elementName: null
  };
};

const asyncActionError = state => {
  return {
    ...state,
    loading: false,
    elementName: null
  };
};

export default createReducer(initialState, {
  [ASYNC_ACTION_START]: asyncActionStart,
  [ASYNC_ACTION_FINISHED]: asyncActionFinished,
  [ASYNC_ACTION_ERROR]: asyncActionError
});
