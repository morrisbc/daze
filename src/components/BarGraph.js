import React from "react";
import PropTypes from "prop-types";
import Bar from "./Bar";

const BarGraph = ({ labels, values, unit, barColor }) => {
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
        className="d-flex justify-content-around text-white pt-1"
        style={{ borderBottom: "1px solid white" }}
      >
        {labels.map(label => (
          <label key={label} htmlFor={`${label}-bar`}>
            {label}
          </label>
        ))}
      </div>
      <div className="position-relative h-100 d-flex justify-content-around align-items-end px-1">
        <div
          className="position-absolute h-100 d-flex flex-column justify-content-between align-items-end text-white pr-3"
          style={{ left: "-50px" }}
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
            id={`${labels[idx]}-bar`}
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
  barColor: PropTypes.string
};

export default BarGraph;
