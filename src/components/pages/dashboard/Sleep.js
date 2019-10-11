import React from "react";
import PropTypes from "prop-types";
import BarGraph from "../../BarGraph";

const Sleep = ({ sleepGoal, sleepAvg }) => {
  const labels = ["Su", "M", "T", "W", "Th", "F", "S"];
  const values = [6, 7, 6, 8, 8, 7, 6.5];

  return (
    <div className="h-100 d-flex flex-column">
      <div className="d-flex justify-content-around text-white my-4">
        <h3>
          <i className="fas fa-trophy"></i> Goal: {sleepGoal} hours
        </h3>
        <h3>
          <i className="fas fa-history"></i> Average: {sleepAvg} hours
        </h3>
      </div>
      <BarGraph labels={labels} values={values} unit={"h"} barColor="#3f808b" />
    </div>
  );
};

Sleep.propTypes = {
  sleepGoal: PropTypes.number.isRequired
};

export default Sleep;
