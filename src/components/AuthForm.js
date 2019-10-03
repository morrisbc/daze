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
        className="btn btn-block mb-3 text-white"
        type="submit"
        value={submitText}
        style={{
          backgroundColor: "#3f808b",
          borderColor: "#3f808b"
        }}
      />
    </form>
  );
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired
};

export default AuthForm;
