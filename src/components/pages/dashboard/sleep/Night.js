import React from "react";

const Night = ({
  night: { bedTime, wakeTime, rested, tired, headache, sick, id }
}) => {
  return (
    <li style={{ listStyle: "none" }}>
      <p>{new Date(bedTime.seconds * 1000).toUTCString()}</p>
      <p>{new Date(wakeTime.seconds * 1000).toUTCString()}</p>
    </li>
  );
};

export default Night;
