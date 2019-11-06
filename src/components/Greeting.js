import React, { Fragment } from "react";

const Greeting = ({ firstName }) => {
  return (
    <Fragment>
      <h1 className="text-white my-3">Hello{firstName && `, ${firstName}`}!</h1>
    </Fragment>
  );
};

export default Greeting;
