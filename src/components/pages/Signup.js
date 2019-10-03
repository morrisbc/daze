import React from "react";
import AuthForm from "../AuthForm";
import { Link } from "react-router-dom";

const Signup = props => {
  return (
    <div className="signup container d-flex flex-column justify-content-center">
      <h3 className="logo">Daze</h3>
      <AuthForm submitText="Sign Up" />
      <p className="text-white text-center">
        Already have an account?{" "}
        <Link className="auth-link" to="/login">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
