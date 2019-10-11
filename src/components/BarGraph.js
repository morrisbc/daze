import React from "react";
import PropTypes from "prop-types";
import Bar from "./Bar";

const BarGraph = ({ labels, values, unit, goalValue, barColor }) => {
  // Throw Error if the number of labels doesn't match the number of values
  if (labels.length !== values.length) {
    throw new Error();
  }

  // Calculate the numbers for the labels on the y axis
  const maxValue = Math.max(...values);
  let scale = [];

  for (let num = maxValue + 1; num >= 0; num -= (maxValue + 1) / 4) {
    scale.push(num);
  }

  // Courtesy of https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
  const avgValue = values.reduce((a, b) => a + b, 0) / values.length;

  return (
    <div
      className="d-flex flex-column"
      style={{
        border: "1px solid white",
        borderRadius: "15px",
        height: "250px"
      }}
    >
      <div
        className="d-flex justify-content-around text-white py-1"
        style={{ borderBottom: "1px solid white" }}
      >
        {labels.map(label => (
          <span className="m-0" key={label}>
            {label}
          </span>
        ))}
      </div>
      <div className="position-relative h-100 d-flex justify-content-around align-items-end px-1">
        {goalValue && (
          <hr
            className="w-100 position-absolute border border-primary m-0"
            style={{
              bottom: `${(goalValue / (maxValue + 1)) * 100}%`
            }}
          />
        )}
        <hr
          className="w-100 position-absolute m-0"
          style={{
            bottom: `${(avgValue / (maxValue + 1)) * 100}%`,
            border: "1px solid gold"
          }}
        />
        <div
          className="position-absolute d-flex flex-column justify-content-between align-items-end text-white pr-3"
          style={{ left: "-50px", bottom: "-7px", height: "109%" }}
        >
          {scale.map(value => (
            <p key={value} className="m-0">
              {value} {unit}
            </p>
          ))}
        </div>
        {values.map((value, idx) => (
          <Bar
            key={`${labels[idx]}-bar`}
            value={value}
            maxValue={Math.max(...values) + 1}
            color={barColor}
          />
        ))}
      </div>
    </div>
  );
};

BarGraph.propTypes = {
  labels: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
  unit: PropTypes.string.isRequired,
  goalValue: PropTypes.number,
  barColor: PropTypes.string
};

export default BarGraph;
