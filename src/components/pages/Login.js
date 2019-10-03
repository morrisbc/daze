import React from "react";
import FirebaseContext from "../firebase/context";
import AuthForm from "../AuthForm";
import { Link } from "react-router-dom";

function Login() {
  return (
    <FirebaseContext.Consumer>
      {firebase => {
        return (
          <div className="login container d-flex flex-column justify-content-center">
            <h3 className="logo">Daze</h3>
            <AuthForm
              onSubmit={e => {
                e.preventDefault();
                console.log("Login");
              }}
              submitText="Log In"
            />
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
