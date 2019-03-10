import React, { useState, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return { toggleVisibility };
  });

  const marginBottom = {
    marginBottom: "10px"
  };

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button style={marginBottom} onClick={toggleVisibility}>
          {props.buttonLabel}
        </Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button style={marginBottom} onClick={toggleVisibility}>
          cancel
        </Button>
      </div>
    </div>
  );
});

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
};

export default Togglable;
