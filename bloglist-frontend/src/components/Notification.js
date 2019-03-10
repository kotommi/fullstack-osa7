import React from "react";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";

const Notification = props => {
  const notification = props.notification;
  if (!notification) {
    return null;
  }

  return <Message>{notification}</Message>;
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(Notification);
