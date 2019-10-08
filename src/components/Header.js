import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container sticky-top d-flex justify-content-end w-100 pt-3">
      <navbar className="d-flex">
        <NavLink
          className="nav-link mx-3"
          exact
          to="/"
          activeClassName="selected"
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link mx-3"
          to="/login"
          activeClassName="selected"
        >
          Log In
        </NavLink>
        <NavLink
          className="nav-link mx-3"
          to="/signup"
          activeClassName="selected"
        >
          Sign Up
        </NavLink>
      </navbar>
    </header>
  );
};

export default Header;
