import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventList from "../list/EventList";
import { createEvent, updateEvent, deleteEvent, FETCH_EVENTS } from "./../eventActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";

// map redux store data
const mapStateToProps = state => ({
  events: state.events,
  loading: state.async.loading,
  loadingName: state.async.elementName
});

// map redux actions
const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

class EventDashboard extends Component {
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events, loading, loadingName } = this.props;

    if (loadingName === FETCH_EVENTS && loading) return <LoadingComponent />

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} handleDeleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(EventDashboard);
