import React, { useContext, useState, useEffect } from "react";
import FirebaseContext from "../firebase/context";
import AuthForm from "../AuthForm";
import Footer from "../Footer";
import Smoke from "../Smoke";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { addAuthObserver, doSignInWithEmailAndPassword } = firebaseContext;

  const [err, setErr] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    return addAuthObserver(user => {
      if (user) {
        setRedirect(true);
      }
    });
    // eslint-disable-next-line
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    doSignInWithEmailAndPassword(email, password)
      .then(() => setRedirect(true))
      .catch(error => setErr(error.message));
  };

  return (
    <div className="login container d-flex flex-column justify-content-center">
      <Smoke />
      <h3 className="logo">Daze</h3>
      <AuthForm onSubmit={onSubmit} submitText="Log In" />
      {err && <p className="text-warning text-center">{err}</p>}
      <p className="text-white text-center">
        Don't have an account?{" "}
        <Link className="auth-link" to="/signup">
          Sign Up
        </Link>
      </p>
      <Link to="/forgot" className="auth-link text-center">
        Forgot Password?
      </Link>
      <Footer />
      {redirect && <Redirect to="/dashboard" />}
    </div>
  );
};

export default Login;
