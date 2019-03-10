import React from "react";
import loginService from "../services/login";
import blogService from "../services/blogs";
import { useField } from "../hooks/index";
import { connect } from "react-redux";
import { setUser } from "../reducers/userReducer";
import { changeNotification } from "../reducers/notificationReducer";
import { Form, Button } from "semantic-ui-react";

const LoginForm = props => {
  const [name, resetName] = useField("text");
  const [password, resetPassword] = useField("password");

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username: name.value,
        password: password.value
      });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      blogService.setToken(user.token);
      resetName();
      resetPassword();
      props.setUser(user);
    } catch (exception) {
      props.changeNotification(exception.response.data.error);
    }
  };

  return (
    <div className="loginform">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Field>
          <label>username</label>
          <input id="username" {...name} />
        </Form.Field>
        <Form.Field>
          <label>salasana</label>
          <input id="password" {...password} />
        </Form.Field>
        <Button type="submit">login</Button>
      </Form>
    </div>
  );
};

export default connect(
  null,
  { setUser, changeNotification }
)(LoginForm);
