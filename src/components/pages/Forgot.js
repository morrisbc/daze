import React from "react";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div className="forgot container d-flex flex-column justify-content-center">
      <h3 className="text-white text-center">Forgot Password</h3>
      <form>
        <div className="form-group">
          <label className="text-white" htmlFor="forgotEmail">
            Email
          </label>
          <input
            className="form-control text-white"
            type="email"
            name=""
            id="forgotEmail"
            style={{ background: "transparent" }}
          />
        </div>
        <input
          className="btn btn-block text-white"
          type="submit"
          value="Reset Password"
          style={{
            backgroundColor: "#3f808b",
            borderColor: "#3f808b"
          }}
        />
      </form>
      <Link to="/login" className="auth-link text-center mt-3">
        Back to Login
      </Link>
    </div>
  );
};

export default Forgot;
