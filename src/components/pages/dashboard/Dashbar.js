import React from "react";
import PropTypes from "prop-types";

const Dashbar = ({ value, goalValue, unit, activity }) => {
  const border = value >= goalValue ? "2px solid gold" : "none";
  const barLength = goalValue === 0 ? 1 : value / goalValue;

  return (
    <div className="container-fluid text-white text-center my-2">
      <h3>
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
            width: `${barLength * 100}%`,
            backgroundColor: "#3f808b",
            borderRadius: "100px"
          }}
        ></div>
      </div>
      <p className="mt-2">{activity}</p>
    </div>
  );
};

Dashbar.propTypes = {
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  goalValue: PropTypes.number.isRequired,
  activity: PropTypes.string.isRequired
};

export default Dashbar;
