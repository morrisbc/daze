import React from "react";
import PropTypes from "prop-types";

const DateTimeLocal = ({
  inputID,
  labelText,
  className,
  onChange,
  required,
  disabled,
  value,
  style
}) => {
  return (
    <div className="form-group">
      <label htmlFor={inputID}>{labelText}</label>
      <input
        id={inputID}
        type="datetime-local"
        className={className}
        onChange={onChange}
        required={required || false}
        disabled={disabled || false}
        value={value || ""}
        style={style}
      />
    </div>
  );
};

DateTimeLocal.propTypes = {
  inputID: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  style: PropTypes.object
};

export default DateTimeLocal;
