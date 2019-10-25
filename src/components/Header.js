import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="header container fixed-top w-100">
      <button className="mobile-nav" onClick={() => setNavOpen(!navOpen)}>
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
      <nav className={`header-nav ${navOpen ? "nav-open" : "nav-closed"}`}>
        <NavLink
          className="nav-link mx-3"
          exact
          to="/"
          activeClassName="selected"
          onClick={() => setNavOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link mx-3"
          to="/login"
          activeClassName="selected"
          onClick={() => setNavOpen(false)}
        >
          Log In
        </NavLink>
        <NavLink
          className="nav-link mx-3"
          to="/signup"
          activeClassName="selected"
          onClick={() => setNavOpen(false)}
        >
          Sign Up
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
