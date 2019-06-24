/*
 * action types
 */

export const CREATE_EVENT = "CREATE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

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
