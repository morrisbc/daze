import React from "react";
import PropTypes from "prop-types";

const Dashbar = ({ value, unit, goalValue }) => {
  const border = value === goalValue ? "2px solid gold" : "none";

  return (
    <div className="container-fluid my-2">
      <h3 className="text-center text-white">
        {value} <br /> {unit}
      </h3>
      <div className="progress" style={{ border, borderRadius: "100px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax={goalValue}
          style={{
            width: `${(value / goalValue) * 100}%`,
            backgroundColor: "#3f808b",
            borderRadius: "100px"
          }}
        ></div>
      </div>
    </div>
  );
};

Dashbar.propTypes = {
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  goalValue: PropTypes.number.isRequired
};

export default Dashbar;
