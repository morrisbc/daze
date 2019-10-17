import React from "react";
import Greeting from "../../Greeting";
import Dashbar from "./Dashbar";

const Overview = () => {
  const date = new Date();
  const today = `${date.getMonth() +
    1} / ${date.getDate()} / ${date.getFullYear()}`;

  return (
    <div className="h-100 d-flex flex-column justify-content-center text-center">
      <Greeting firstName="Bryce" />
      <h2 className="text-white">{today}</h2>
      <div className="d-flex flex-column flex-md-row w-100">
        <Dashbar value={45} unit="minutes" goalValue={60} activity="Exercise" />
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

export default Overview;
