import {
  asyncActionStart,
  asyncActionFinished,
  asyncActionError,
  ASYNC_ACTION_START
} from "../async/asyncActions";
import { fetchSampleData } from "../../app/data/mockApi";

/*
 * action types
 */

export const CREATE_EVENT = "CREATE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const FETCH_EVENTS = "FETCH_EVENTS";

/*
 * action creators
 */

export function createEvent(event) {
  return {
    type: CREATE_EVENT,
    payload: {
      event
    }
  };
}

export function updateEvent(event) {
  return {
    type: UPDATE_EVENT,
    payload: {
      event
    }
  };
}

export function deleteEvent(eventId) {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
}

export function loadEvents() {
  return async dispatch => {
    try {
      dispatch({ type: ASYNC_ACTION_START, payload: FETCH_EVENTS });
      const events = await fetchSampleData();
      dispatch({ type: FETCH_EVENTS, payload: { events } });
      dispatch(asyncActionFinished());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
}
