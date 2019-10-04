import React, { useContext, useState } from "react";
import AuthForm from "../AuthForm";
import Footer from "../Footer";
import { Link, Redirect } from "react-router-dom";
import FirebaseContext from "../firebase/context";

const Signup = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { doCreateUserWithEmailAndPassword } = firebaseContext;
  const [redirect, setRedirect] = useState(false);
  const [err, setErr] = useState(null);

  const onSubmit = e => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    doCreateUserWithEmailAndPassword(email, password)
      .then(() => setRedirect(true))
      .catch(error => setErr(error.message));
  };

  return (
    <div className="signup container d-flex flex-column justify-content-center">
      <h3 className="logo">Daze</h3>
      <AuthForm onSubmit={onSubmit} submitText="Sign Up" />
      {err && <p className="text-warning text-center">{err}</p>}
      <p className="text-white text-center">
        Already have an account?{" "}
        <Link className="auth-link" to="/login">
          Log In
        </Link>
      </p>
      <Footer />
      {redirect && <Redirect to="/dashboard" />}
    </div>
  );
};

export default Signup;
