import React from "react";
import Greeting from "../Greeting";
import Dashbar from "../Dashbar";

const Dashboard = () => {
  const date = new Date();
  const today = `${date.getMonth() +
    1} / ${date.getDay()} / ${date.getFullYear()}`;

  return (
    <div className="dashboard container d-flex flex-column justify-content-center align-items-center">
      <Greeting firstName="Bryce" />
      <h2 className="text-white">{today}</h2>
      <div className="d-flex flex-column flex-md-row w-100">
        <Dashbar value={2} unit="hours" goalValue={4} activity="Exercise" />
        <Dashbar value={8} unit="hours" goalValue={8} activity="Sleep" />
        <Dashbar
          value={1200}
          unit="calories"
          goalValue={2000}
          activity="Diet"
        />
      </div>
    </div>
  );
};

export default Dashboard;
