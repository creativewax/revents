/*
 * action types
 */

export const ASYNC_ACTION_START = "ASYNC_ACTION_START";
export const ASYNC_ACTION_FINISHED = "ASYNC_ACTION_FINISHED";
export const ASYNC_ACTION_ERROR = "ASYNC_ACTION_ERROR";

/*
 * action creators
 */

export function asyncActionStart() {
  return {
    type: ASYNC_ACTION_START
  };
}

export function asyncActionFinished() {
  return {
    type: ASYNC_ACTION_FINISHED
  };
}

export function asyncActionError() {
  return {
    type: ASYNC_ACTION_ERROR
  };
}
