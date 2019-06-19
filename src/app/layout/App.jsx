import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/dashboard/EventDashboard";
import NavBar from "../../features/nav/bar/NavBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
