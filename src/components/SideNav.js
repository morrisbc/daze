import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import FirebaseContext from "./firebase/context";

const Sidenav = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { addAuthObserver, doSignOut } = firebaseContext;

  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    addAuthObserver(user => {
      setIsLoggedOut(!user);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <aside className="sidenav sticky-top d-flex flex-column justify-content-center align-items-center">
      <nav>
        <NavLink
          className="nav-link py-4"
          to="/dashboard"
          exact
          activeClassName="selected"
        >
          Overview
        </NavLink>
        <NavLink
          className="nav-link py-4"
          to="/dashboard/sleep"
          activeClassName="selected"
        >
          Sleep
        </NavLink>
        <NavLink
          className="nav-link py-4"
          to="/dashboard/exercise"
          activeClassName="selected"
        >
          Exercise
        </NavLink>
        <NavLink
          className="nav-link py-4"
          to="/dashboard/diet"
          activeClassName="selected"
        >
          Diet
        </NavLink>
        <NavLink
          className="nav-link py-4"
          to="/dashboard/settings"
          activeClassName="selected"
        >
          Settings
        </NavLink>
        <Link className="nav-link py-4" to="/" onClick={doSignOut}>
          Log Out
        </Link>
        {isLoggedOut && <Redirect to="/" />}
      </nav>
    </aside>
  );
};

export default Sidenav;
