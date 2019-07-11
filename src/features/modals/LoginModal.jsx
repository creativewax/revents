import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import LoginForm from "../auth/login/LoginForm";
import { closeModal } from "./modalActions";
import { LOGIN_USER } from "../auth/authActions";
import LoadingComponent from "../../app/layout/LoadingComponent";

// redux state/actions
const mapStateToProps = state => ({
  loading: state.async.loading,
  loadingName: state.async.elementName
});

const actions = { closeModal };

class LoginModal extends Component {
  render() {
    const { closeModal, loading, loadingName } = this.props;

    return (
      <Modal size='mini' open={true} onClose={closeModal}>
        <Modal.Header>Login to Re-vents</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <LoginForm />
          </Modal.Description>
        </Modal.Content>
        {loadingName === LOGIN_USER && loading && <LoadingComponent />}
      </Modal>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(LoginModal);
