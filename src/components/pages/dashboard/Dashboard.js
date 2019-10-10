import React from "react";
import { Switch, Route } from "react-router-dom";
import SideNav from "../../SideNav";
import Overview from "./Overview";
import Sleep from "./Sleep";

const Dashboard = () => {
  return (
    <div className="dashboard container-fluid d-flex">
      <SideNav />
      <main className="container">
        <Switch>
          <Route exact path="/dashboard">
            <Overview />
          </Route>
          <Route path="/dashboard/sleep">
            <Sleep sleepGoal={8} />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default Dashboard;
