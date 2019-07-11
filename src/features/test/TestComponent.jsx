import React, { Component } from "react";
import { connect } from "react-redux";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { incrementAsync, decrementAsync } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { openModal, TEST_MODAL } from "../modals/modalActions";

const mapStateToProps = state => ({
  data: state.test.data,
  loading: state.async.loading,
  buttonName: state.async.elementName
});

const actions = {
  incrementAsync,
  decrementAsync,
  openModal
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
    const { data, incrementAsync, decrementAsync, openModal, loading, buttonName } = this.props;
    const { latLng } = this.state;
    return (
      <div>
        <h1>Test</h1>
        <h3>The answer is {data}</h3>
        <Button
          name='increment'
          onClick={(e) => {incrementAsync(e.target.name)}}
          loading={buttonName === 'increment' && loading}
          positive
          content='Incremenet'
        />
        <Button
          name='decrement'
          onClick={(e) => {decrementAsync(e.target.name)}}
          loading={buttonName === 'decrement' && loading}
          negative
          content='Decremenet'
        />
        <Button
          onClick={() => openModal(TEST_MODAL, { data: 42 })}
          color='teal'
          content='Open Modal'
        />
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
