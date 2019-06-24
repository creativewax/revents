import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const {events, handleDeleteEvent} = this.props;

    return (
      <Fragment>
        {events && events.map(event => (
          <EventListItem key={event.id} event={event} handleDeleteEvent={handleDeleteEvent} />
        ))}
      </Fragment>
    );
  }
}

export default EventList;
