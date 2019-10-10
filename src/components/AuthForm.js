import React from "react";
import PropTypes from "prop-types";

const AuthForm = ({ onSubmit, submitText }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label className="text-white">Username</label>
        <input
          className="form-control text-white"
          type="email"
          style={{ background: "transparent" }}
        />
      </div>
      <div className="form-group">
        <label className="text-white">Password</label>
        <input
          className="form-control text-white"
          type="password"
          style={{ background: "transparent" }}
        />
      </div>
      <input
        className="btn btn-block btn-main mb-3"
        type="submit"
        value={submitText}
      />
    </form>
  );
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired
};

export default AuthForm;
