import React from "react";
import PropTypes from "prop-types";

const Sleep = ({ sleepGoal }) => {
  return (
    <div className="h-100 d-flex flex-column">
      <div className="text-white text-center mt-4">
        <h2>
          <i className="fas fa-bed"></i> Sleep Goal: {sleepGoal} hours
        </h2>
      </div>
      <button className="btn btn-main mx-auto" style={{ width: "300px" }}>
        Add Sleep
      </button>
    </div>
  );
};

Sleep.propTypes = {
  sleepGoal: PropTypes.number.isRequired
};

export default Sleep;
