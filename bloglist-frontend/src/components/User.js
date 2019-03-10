import React from "react";
import { connect } from "react-redux";
import { Header } from "semantic-ui-react";

const User = props => {
  if (!props.shownUser) {
    return null;
  }

  return (
    <div>
      <Header as="h1">{props.shownUser.username}</Header>
      <Header as="h2">added blogs</Header>
      <ul>
        {props.shownUser.blogs.map(blog => {
          return <li key={blog.id}>{blog.title}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    shownUser: state.users.find(user => user.id === ownProps.id)
  };
};

export default connect(mapStateToProps)(User);
