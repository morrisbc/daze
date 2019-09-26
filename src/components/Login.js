import React, { Fragment } from "react";

function Login() {
  return (
    <Fragment>
      <i className="fas fa-brain mx-auto"></i>
      <form>
        <div className="form-group">
          <label htmlFor="loginUsername">Username</label>
          <input
            className="form-control"
            type="text"
            name=""
            id="loginUsername"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input
            className="form-control"
            type="password"
            name=""
            id="loginPassword"
            placeholder="Password"
          />
        </div>
        <input
          className="btn btn-primary btn-block mb-3"
          type="submit"
          value="Log In"
        />
        <a href="">Forgot Password?</a>
      </form>
    </Fragment>
  );
}

export default Login;
