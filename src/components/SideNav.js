import React from "react";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <aside className="sidenav d-flex flex-column justify-content-center align-items-center">
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
      </nav>
    </aside>
  );
};

export default Sidenav;
