import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../menu/SignedOutMenu";
import SignedInMenu from "../menu/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.setState({ authenticated: true });
  };

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/');
  };

  render() {
    const { authenticated } = this.state;

    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item exact as={NavLink} to='/' header>
            <img src='/assets/images/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item exact name='Events' as={NavLink} to='/events' />
          <Menu.Item name='People' as={NavLink} to='/people' />
          <Menu.Item name='Test' as={NavLink} to='/test' />
          <Menu.Item>
            <Button
              as={Link}
              to='/event/create'
              floated='right'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu handleSignOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu handleSignIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
