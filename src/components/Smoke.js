import React from "react";

const Smoke = () => {
  return (
    <img
      className="smoke"
      src="/assets/smoke.gif"
      alt="smoke"
      style={{
        position: "fixed",
        minWidth: "100vw",
        minHeight: "100vh",
        bottom: "0",
        left: "0",
        zIndex: "-1",
        opacity: "0.2"
      }}
    />
  );
};

export default Smoke;
