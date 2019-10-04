import React from "react";
import PropTypes from "prop-types";

const Alert = ({ type, text }) => {
  return <div className={`alert ${type} mt-3 mb-0`}>{text}</div>;
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Alert;
