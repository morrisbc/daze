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

  for (let num = 0; num <= maxValue + 1; num += (maxValue + 1) / 4) {
    scale.unshift(num);
  }

  // Courtesy of https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
  const avgValue = values.reduce((a, b) => a + b, 0) / values.length;

  return (
    // Graph Container
    <div
      className="d-flex align-items-end"
      style={{
        height: "250px"
      }}
    >
      {/* Y Axis Scale */}
      <ol
        reversed
        className="d-flex flex-column justify-content-between align-items-end text-white pr-2 m-0"
        style={{ height: "92%", listStyle: "none" }}
      >
        {scale.map(value => (
          <li key={value} className="m-0 text-nowrap">
            {value} {unit}
          </li>
        ))}
      </ol>
      {/* Labels and Bars Container */}
      <div
        className="h-100 w-100 d-flex flex-column"
        style={{
          border: "1px solid white",
          borderRadius: "15px"
        }}
      >
        {/* Labels */}
        <ul
          className="d-flex justify-content-around text-white py-1 m-0"
          style={{
            borderBottom: "1px solid white",
            height: "15%",
            listStyle: "none"
          }}
        >
          {labels.map(label => (
            <li id={label} className="m-0" key={label}>
              {label}
            </li>
          ))}
        </ul>
        {/* Bars Container */}
        <div className="position-relative h-100 d-flex justify-content-around align-items-end px-1">
          {goalValue && (
            // Goal Line
            <div
              className="w-100 position-absolute m-0"
              style={{
                bottom: `${(goalValue / (maxValue + 1)) * 100}%`,
                left: 0,
                height: "1px",
                border: "1px solid #007bff"
              }}
            ></div>
          )}
          {/* Average Line */}
          <div
            className="w-100 position-absolute m-0"
            style={{
              bottom: `${(avgValue / (maxValue + 1)) * 100}%`,
              left: 0,
              height: "1px",
              border: "1px solid gold"
            }}
          ></div>
          {values.map((value, idx) => (
            <Bar
              key={`${labels[idx]}-bar`}
              value={value}
              maxValue={Math.max(...values) + 1}
              color={barColor}
              label={`${labels[idx]}`}
            />
          ))}
        </div>
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
