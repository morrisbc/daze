import React, { Fragment } from "react";
import DailyGoals from "./DailyGoals";
import PasswordChange from "./PasswordChange";
import PersonalInfo from "./PersonalInfo";

const Settings = () => {
  return (
    <Fragment>
      <DailyGoals />
      <PersonalInfo />
      <PasswordChange />
    </Fragment>
  );
};

export default Settings;
