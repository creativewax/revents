import React, { Component } from "react";
import { connect } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";

const mapStateToProps = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  state = {
    latLng: {
      lat: 59.95,
      lng: 30.33
    }
  };

  handlePlaceUpdate = latLng => {
    console.log("Success", latLng);
  };

  handleSelectAddress = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({ latLng: latLng });
      })
      .catch(error => console.error("Error", error));
  };

  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    const { latLng } = this.state;
    return (
      <div>
        <h1>Test</h1>
        <h3>The answer is {data}</h3>
        <Button onClick={incrementCounter} positive content='Incremenet' />
        <Button onClick={decrementCounter} negative content='Decremenet' />
        <br />
        <br />
        <TestPlaceInput handleSelectAddress={this.handleSelectAddress} />
        <SimpleMap latLng={latLng} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(TestComponent);
