import { asyncActionFinished, asyncActionError, ASYNC_ACTION_START } from "../async/asyncActions";
import { fetchSampleData } from "../../app/data/mockApi";
import { toastr } from "react-redux-toastr";

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
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_EVENT,
        payload: {
          event
        }
      });
      toastr.success("Success!", "Event has been created");
    } catch (error) {
      toastr.error("Oops!", "Something went wrong when trying to create a new event");
    }
  };
}

export function updateEvent(event) {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload: {
          event
        }
      });
      toastr.success("Success!", "Event has been updated");
    } catch (error) {
      toastr.error("Oops!", "Something went wrong when trying to update a new event");
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
