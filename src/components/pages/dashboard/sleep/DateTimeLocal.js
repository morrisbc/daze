import React from "react";
import PropTypes from "prop-types";

const DateTimeLocal = ({
  inputID,
  labelText,
  className,
  onChange,
  required,
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
  style: PropTypes.object
};

export default DateTimeLocal;
