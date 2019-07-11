import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../menu/SignedOutMenu";
import SignedInMenu from "../menu/SignedInMenu";
import { openModal, LOGIN_MODAL, REGISTER_MODAL } from "../../modals/modalActions";
import { logout } from "../../auth/authActions";

// redux state/actions
const mapStateToProps = state => ({
  auth: state.auth
});

const actions = {
  openModal,
  logout
};

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal(LOGIN_MODAL);
  };

  handleRegister = () => {
    this.props.openModal(REGISTER_MODAL);
  };

  handleSignOut = () => {
    this.props.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;

    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item exact as={NavLink} to='/' header>
            <img src='/assets/images/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item exact name='Events' as={NavLink} to='/events' />
          {auth.authenticated && (
            <Fragment>
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
            </Fragment>
          )}
          {auth.authenticated ? (
            <SignedInMenu handleSignOut={this.handleSignOut} currentUser={auth.currentUser} />
          ) : (
            <SignedOutMenu handleSignIn={this.handleSignIn} handleRegister={this.handleRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(NavBar)
);
