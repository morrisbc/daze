import React from "react";
import FirebaseContext from "../firebase/context";
import { Link } from "react-router-dom";

function Login() {
  return (
    <FirebaseContext.Consumer>
      {firebase => {
        return (
          <div className="login container d-flex flex-column justify-content-center">
            <h3 className="logo">Daze</h3>
            <form>
              <div className="form-group">
                <label className="text-white" htmlFor="loginUsername">
                  Username
                </label>
                <input
                  className="form-control text-white"
                  type="email"
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
                className="btn btn-block mb-3 text-white"
                type="submit"
                value="Log In"
                style={{
                  backgroundColor: "#3f808b",
                  borderColor: "#3f808b"
                }}
                onClick={firebase.doCreateUserWithEmailAndPassword}
              />
            </form>
            <p className="text-white text-center">
              Don't have an account?{" "}
              <Link className="auth-link" to="/signup">
                Sign Up
              </Link>
            </p>
            <Link to="/forgot" className="auth-link text-center">
              Forgot Password?
            </Link>
          </div>
        );
      }}
    </FirebaseContext.Consumer>
  );
}

export default Login;
