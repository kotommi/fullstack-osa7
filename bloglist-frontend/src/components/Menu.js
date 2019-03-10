import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../reducers/userReducer";
import { Menu as Mmenu } from "semantic-ui-react";

const Menu = props => {
  const user = props.user;

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    props.setUser(null);
  };

  const buttonStyle = {
    marginLeft: "10px"
  };

  return (
    <Mmenu>
      <Mmenu.Item link>
        <Link id="blogLink" to="/">
          blogs
        </Link>
      </Mmenu.Item>
      <Mmenu.Item link>
        <Link id="userLink" to="/users">
          users
        </Link>
      </Mmenu.Item>
      <Mmenu.Item>
        {user.username} is logged in
        <button id="logoutButton" style={buttonStyle} onClick={handleLogout}>
          logout
        </button>
      </Mmenu.Item>
    </Mmenu>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { setUser }
)(Menu);
