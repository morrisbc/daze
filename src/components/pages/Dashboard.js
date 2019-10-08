import React from "react";
import Greeting from "../Greeting";
import Dashbar from "../Dashbar";

const Dashboard = () => {
  return (
    <div className="dashboard container d-flex flex-column justify-content-center align-items-center">
      <Greeting firstName="Bryce" />
      <div className="d-flex flex-column flex-md-row w-100">
        <Dashbar value={2} unit="hours" goalValue={4} />
        <Dashbar value={8} unit="hours" goalValue={8} />
        <Dashbar value={1200} unit="calories" goalValue={2000} />
      </div>
    </div>
  );
};

export default Dashboard;
