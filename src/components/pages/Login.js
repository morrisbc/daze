import React from "react";

function Login() {
  return (
    <div className="login container d-flex flex-column justify-content-center">
      <h3 className="logo">Daze</h3>
      <form style={{ minWidth: "320px" }}>
        <div className="form-group">
          <label className="text-white" htmlFor="loginUsername">
            Username
          </label>
          <input
            className="form-control text-white"
            type="text"
            id="loginUsername"
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label className="text-white" htmlFor="loginPassword">
            Password
          </label>
          <input
            className="form-control text-white"
            type="password"
            id="loginPassword"
            style={{ background: "transparent" }}
          />
        </div>
        <input
          className="btn btn-primary btn-block mb-3"
          type="submit"
          value="Log In"
          style={{
            backgroundColor: "#3f808b",
            borderColor: "#3f808b"
          }}
        />
        <a href="#" className="text-white">
          Forgot Password?
        </a>
      </form>
    </div>
  );
}

export default Login;
