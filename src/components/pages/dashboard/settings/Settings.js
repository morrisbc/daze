import React from "react";
import DailyGoals from "./DailyGoals";
import PasswordChange from "./PasswordChange";
import PersonalInfo from "./PersonalInfo";

const Settings = () => {
  return (
    <div className="py-3">
      <DailyGoals />
      <PersonalInfo />
      <PasswordChange />
    </div>
  );
};

export default Settings;
