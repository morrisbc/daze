import React from "react";
import PropTypes from "prop-types";

const NightCheck = ({ inputID, disabled, value, onChange, text, style }) => {
  return (
    <div className="form-check my-2">
      <input
        type="checkbox"
        className="form-check-input"
        id={inputID}
        value={value}
        checked={value}
        onChange={onChange}
        disabled={disabled}
        style={style}
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
  text: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default NightCheck;
