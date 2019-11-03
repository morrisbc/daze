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
        <div className="d-flex justify-content-around text-white mt-3 mb-2">
          <h3
            className="sleep-header border-primary pb-1"
            style={{ borderBottom: "2px solid" }}
          >
            Goal: {sleepGoal} hrs
          </h3>
          <h3
            className="sleep-header pb-1"
            style={{ borderBottom: "2px solid gold" }}
          >
            Mean: {avgValue.toFixed(2)} hrs
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
