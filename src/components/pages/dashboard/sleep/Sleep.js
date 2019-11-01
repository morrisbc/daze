import React, { Fragment } from "react";
import PropTypes from "prop-types";
import BarGraph from "../../../graphs/BarGraph";
import AddNight from "./AddNight";

const Sleep = ({ sleepGoal }) => {
  const labels = ["Su", "M", "T", "W", "Th", "F", "S"];
  const values = [6, 7, 6, 8, 8, 7, 6.5];
  // Courtesy of https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
  const avgValue = values.reduce((a, b) => a + b, 0) / values.length;

  return (
    <Fragment>
      <section>
        <div className="d-flex justify-content-around text-white my-3">
          <h3
            className="border-primary pb-1"
            style={{ borderBottom: "2px solid", fontSize: "1.5rem" }}
          >
            <i className="fas fa-trophy"></i> Goal: {sleepGoal} hours
          </h3>
          <h3
            className="pb-1"
            style={{ borderBottom: "2px solid gold", fontSize: "1.5rem" }}
          >
            <i className="fas fa-history"></i> Avg: {avgValue.toFixed(2)} hours
          </h3>
        </div>
        <BarGraph
          labels={labels}
          values={values}
          unit={"h"}
          goalValue={sleepGoal}
          barColor="#3f808b"
        />
      </section>
      <AddNight />
    </Fragment>
  );
};

Sleep.propTypes = {
  sleepGoal: PropTypes.number.isRequired
};

export default Sleep;
