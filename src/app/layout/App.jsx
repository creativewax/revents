import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/bar/NavBar";
import EventDashboard from "../../features/event/dashboard/EventDashboard";
import EventDetailedPage from "../../features/event/detail/EventDetailedPage";
import EventForm from "../../features/event/form/EventForm";
import PeopleDashboard from "../../features/user/people/PeopleDashboard";
import UserDetailedPage from "../../features/user/detail/UserDetailedPage";
import SettingsDashboard from "../../features/user/settings/SettingsDashboard";
import TestComponent from "../../features/test/TestComponent";
import ModalManager from "../../features/modals/ModalManager";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className='main'>
                <Switch key={this.props.location.key}>
                  <Route exact path='/events' component={EventDashboard} />
                  <Route path={["/events/:id", "/delete/:id"]} component={EventDetailedPage} />
                  <Route path={["/event/create", "/manage/:id"]} component={EventForm} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path='/test' component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
