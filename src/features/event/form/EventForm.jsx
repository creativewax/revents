/*global google*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from "revalidate";
import { Segment, Form, Button, Grid, GridColumn, Header } from "semantic-ui-react";
import { createEvent, updateEvent } from "./../eventActions";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

// map redux store data
const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  // check if any data exists and check for matching id if it does
  if (eventId && state.events && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return { initialValues: event };
};

// map redux actions
const actions = {
  createEvent,
  updateEvent
};

// drop down options
const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

// form validators
const validate = combineValidators({
  title: isRequired({ message: "The event title is required" }),
  category: isRequired({ message: "The category is required" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({ message: "Descriotion needs to be at least 5 characters long" })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date")
});

class EventForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {}
  };

  onFormSubmit = values => {
    // append to values
    values.venueLatLng = this.state.venueLatLng;

    if (this.props.initialValues.id) {
      // update existing event
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      // create new event
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/images/user.png",
        hostedBy: "Bob"
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          cityLatLng: latLng
        });
      })
      .then(() => {
        this.props.change("city", selectedCity);
      })
      .catch(error => console.error("Error", error));
  };

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          venueLatLng: latLng
        });
      })
      .then(() => {
        this.props.change("venue", selectedVenue);
      })
      .catch(error => console.error("Error", error));
  };

  render() {
    const { history, initialValues, invalid, submitting, pristine } = this.props;
    return (
      <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete='on'>
        <Segment>
          <Grid>
            <GridColumn width={8}>
              <Header sub color='teal' content='Event details' />
              <Field name='title' component={TextInput} placeholder='Give your event a namw' />
              <Field
                name='category'
                component={SelectInput}
                options={category}
                multiple={false}
                placeholder='What is your event about?'
              />
              <Field
                name='description'
                component={TextArea}
                rows={3}
                placeholder='Tell us about your event'
              />
            </GridColumn>

            <GridColumn width={8}>
              <Header sub color='teal' content='Event location' />
              <Field
                name='city'
                component={PlaceInput}
                options={{ types: ['(cities)'] }}
                onSelect={this.handleCitySelect}
                placeholder='Event City'
              />
              <Field
                name='venue'
                component={PlaceInput}
                options={{
                  location: new google.maps.LatLng(this.state.cityLatLng),
                  radius: 100,
                  type: ['establishments']
                }}
                onSelect={this.handleVenueSelect}
                placeholder='Event Venue'
              />
              <Field
                name='date'
                component={DateInput}
                dateFormat='dd LLL yyyy hh:mm'
                showTimeSelect
                timeFormat='HH:mm'
                placeholder='Event Date'
              />
              <Button
                onClick={
                  initialValues && initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push("/events")
                }
                type='button'
                floated='right'
              >
                Cancel
              </Button>
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type='submit'
                floated='right'
              >
                Submit
              </Button>
            </GridColumn>
          </Grid>
        </Segment>
      </Form>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "eventForm", validate })(EventForm));
