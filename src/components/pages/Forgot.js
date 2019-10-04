import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import FirebaseContext from "../firebase/context";
import Footer from "../Footer";

const Forgot = () => {
  const firebaseContext = useContext(FirebaseContext);

  const { doPasswordReset } = firebaseContext;

  const [redirect, setRedirect] = useState(false);
  const [err, setErr] = useState(null);

  const onSubmit = e => {
    e.preventDefault();

    const email = e.target[0].value;

    doPasswordReset(email)
      .then(() => setRedirect(true))
      .catch(err => {
        setErr(err.message);
        //setTimeout(setErr(null), 2500);
      });
  };

  return (
    <div className="forgot container d-flex flex-column justify-content-center">
      <h3 className="text-white text-center">Forgot Password</h3>
      <form onSubmit={onSubmit}>
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
      {err && <p className="text-center text-warning mt-3 mb-0">{err}</p>}
      <Link to="/login" className="auth-link text-center mt-3">
        Back to Login
      </Link>
      <Footer />
      {redirect && <Redirect to="/login" />}
    </div>
  );
};

export default Forgot;
