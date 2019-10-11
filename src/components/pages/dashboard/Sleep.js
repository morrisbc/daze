import React from "react";
import PropTypes from "prop-types";
import BarGraph from "../../BarGraph";

const Sleep = ({ sleepGoal, sleepAvg }) => {
  const labels = ["Su", "M", "T", "W", "Th", "F", "S"];
  const values = [6, 7, 6, 8, 8, 7, 6.5];
  // Courtesy of https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
  const avgValue = values.reduce((a, b) => a + b, 0) / values.length;

  return (
    <div className="h-100 d-flex flex-column">
      <div className="d-flex justify-content-around text-white my-4">
        <h3
          className="border-primary pb-1"
          style={{ borderBottom: "2px solid" }}
        >
          <i className="fas fa-trophy"></i> Goal: {sleepGoal} hours
        </h3>
        <h3 className="pb-1" style={{ borderBottom: "2px solid gold" }}>
          <i className="fas fa-history"></i> Average: {avgValue.toFixed(2)}{" "}
          hours
        </h3>
      </div>
      <BarGraph
        labels={labels}
        values={values}
        unit={"h"}
        goalValue={sleepGoal}
        barColor="#3f808b"
      />
    </div>
  );
};

Sleep.propTypes = {
  sleepGoal: PropTypes.number.isRequired
};

export default Sleep;
