import React from "react";
import { connect } from "react-redux";
import TestModal from "./TestModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal
};

// map redux store data
const mapStateToProps = state => ({
  currentModal: state.modals
});

const ModalManager = ({ currentModal }) => {
  let renderedModal;

  if (currentModal) {
    const { type, props } = currentModal;
    const ModalComponent = modalLookup[type];

    renderedModal = <ModalComponent {...props} />;
  }
  return <span>{renderedModal}</span>;
};

export default connect(mapStateToProps)(ModalManager);
