import React, { useState, useEffect, useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import FirebaseContext from "../../firebase/context";

const Sidenav = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { addAuthObserver, doSignOut } = firebaseContext;

  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    return addAuthObserver(user => {
      if (!user) {
        setIsLoggedOut(true);
      }
    });
    // eslint-disable-next-line
  }, []);

  const logOut = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      doSignOut().then(setIsLoggedOut(true));
    }
  };

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
        <button
          className="nav-link py-4 bg-transparent border-0"
          onClick={logOut}
        >
          Log Out
        </button>
        {isLoggedOut && <Redirect to="/" />}
      </nav>
    </aside>
  );
};

export default Sidenav;
