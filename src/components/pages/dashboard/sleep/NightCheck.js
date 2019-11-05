import React from "react";
import PropTypes from "prop-types";

const NightCheck = ({ inputID, disabled, onChange, text }) => {
  return (
    <div className="form-check my-2">
      <input
        type="checkbox"
        className="form-check-input"
        id={inputID}
        onChange={onChange}
        disabled={disabled}
      />
      <label className="form-check-label" htmlFor={inputID}>
        {text}
      </label>
    </div>
  );
};

NightCheck.propTypes = {
  inputID: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default NightCheck;
