import React from "react";
import PropTypes from "prop-types";

const Bar = ({ id, value, maxValue, color }) => {
  return (
    <div
      id={id}
      style={{
        width: "25px",
        borderRadius: "5px",
        backgroundColor: color || "#007bff",
        height: `${(value / maxValue) * 100}%`,
        margin: "0 3px"
      }}
    ></div>
  );
};

Bar.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  color: PropTypes.string
};

export default Bar;
