import React, { useState, useEffect, useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import FirebaseContext from "../../firebase/context";

const Sidenav = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { addAuthObserver, doSignOut } = firebaseContext;

  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);

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
    <aside className="aside-nav">
      <button
        className="mobile-nav-btn"
        onClick={() => setSidenavOpen(!sidenavOpen)}
      >
        <svg
          width="32px"
          height="32px"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          className="svg-inline--fa fa-bars fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="white"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <nav
        className={`sidenav sticky-top ${
          sidenavOpen ? "sidenav-open" : "sidenav-closed"
        } d-flex flex-column justify-content-center align-items-center`}
      >
        <NavLink
          className="nav-link py-4"
          to="/dashboard"
          exact
          activeClassName="selected"
          onClick={() => setSidenavOpen(false)}
        >
          Overview
        </NavLink>
        <NavLink
          className="nav-link py-4"
          to="/dashboard/sleep"
          activeClassName="selected"
          onClick={() => setSidenavOpen(false)}
        >
          Sleep
        </NavLink>
        <NavLink
          className="nav-link py-4"
          to="/dashboard/exercise"
          activeClassName="selected"
          onClick={() => setSidenavOpen(false)}
        >
          Exercise
        </NavLink>
        <NavLink
          className="nav-link py-4"
          to="/dashboard/diet"
          activeClassName="selected"
          onClick={() => setSidenavOpen(false)}
        >
          Diet
        </NavLink>
        <NavLink
          className="nav-link py-4"
          to="/dashboard/settings"
          activeClassName="selected"
          onClick={() => setSidenavOpen(false)}
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
