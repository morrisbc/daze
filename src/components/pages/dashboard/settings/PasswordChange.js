import React, { useState, useContext } from "react";
import FirebaseContext from "../../../firebase/context";

const PasswordChange = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { getUserEmail, doPasswordReset } = firebaseContext;

  const [success, setSuccess] = useState(null);
  const [err, setErr] = useState(null);

  const requestPasswordChange = e => {
    e.preventDefault();

    const email = getUserEmail();
    if (email) {
      doPasswordReset(email).then(
        setSuccess(
          "An email has been sent with instructions on changing your password"
        )
      );
    } else {
      setErr(
        "An error occured attempting to send the email. Please try again."
      );
    }
  };

  return (
    <section className="text-white mt-5">
      <h3 className="border-bottom pb-2">Request Password Change</h3>
      <button onClick={requestPasswordChange} className="btn btn-main mt-3">
        Request Password Change
      </button>
      {success && <p className="mt-2">{success}</p>}
      {err && <p className="text-warning mt-2">{err}</p>}
    </section>
  );
};

export default PasswordChange;
