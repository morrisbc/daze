import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Greeting = ({ firstName }) => {
  return (
    <Fragment>
      <h2 className="text-white my-5">Hello, {firstName}!</h2>
    </Fragment>
  );
};

Greeting.propTypes = {
  firstName: PropTypes.string.isRequired
};

export default Greeting;
