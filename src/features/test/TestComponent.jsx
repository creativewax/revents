import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";

const mapStateToProps = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test</h1>
        <h3>The answer is {data}</h3>
        <Button onClick={incrementCounter} positive content='Incremenet' />
        <Button onClick={decrementCounter} negative content='Decremenet' />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(TestComponent);
