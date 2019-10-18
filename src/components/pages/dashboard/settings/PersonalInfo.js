import React, { useState, useEffect, useContext } from "react";
import FirebaseContext from "../../../firebase/context";

const PersonalInfo = () => {
  const firebaseContext = useContext(FirebaseContext);
  const {
    addAuthObserver,
    setUserProfile,
    getUserDisplayName
  } = firebaseContext;

  const [firstName, setFirstName] = useState(getUserDisplayName() || "");
  const [success, setSuccess] = useState(null);
  const [err, setErr] = useState(null);

  const onSubmit = e => {
    e.preventDefault();

    setUserProfile({ displayName: firstName })
      .then(() => {
        setSuccess("First name successfully changed.");
      })
      .catch(() =>
        setErr("There was an issue changing your first name. Please try again.")
      );
  };

  useEffect(() => {
    addAuthObserver(user => {
      if (user) {
        setFirstName(user.displayName);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <section className="text-white mt-5">
      <h3 className="border-bottom pb-2">Personal Info</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          className="form-control bg-transparent text-white"
          type="text"
          id="first-name"
          style={{ width: "200px" }}
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input className="btn btn-main mt-3" type="submit" value="Change" />
      </form>
      {success && <p className="mt-2">{success}</p>}
      {err && <p className="mt-2 text-warning">{err}</p>}
    </section>
  );
};

export default PersonalInfo;
