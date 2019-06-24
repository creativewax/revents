import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/bar/NavBar";
import EventDashboard from "../../features/event/dashboard/EventDashboard";
import EventDetailedPage from "../../features/event/detail/EventDetailedPage";
import EventForm from "../../features/event/form/EventForm";
import PeopleDashboard from "../../features/user/people/PeopleDashboard";
import UserDetailedPage from "../../features/user/detail/UserDetailedPage";
import SettingsDashboard from "../../features/user/settings/SettingsDashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className='main'>
                <Route path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailedPage} />
                <Route path='/event/create' component={EventForm} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/:id' component={UserDetailedPage} />
                <Route path='/settings' component={SettingsDashboard} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
