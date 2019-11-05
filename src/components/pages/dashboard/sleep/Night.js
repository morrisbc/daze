import React from "react";

const Night = ({
  night: { bedTime, wakeTime, rested, tired, headache, sick, id }
}) => {
  return (
    <li>
      <p>{"Bed Time: " + new Date(bedTime).toLocaleString()}</p>
      <p>{"Wake Time: " + new Date(wakeTime).toLocaleString()}</p>
    </li>
  );
};

export default Night;
