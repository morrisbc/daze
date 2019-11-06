import React, { useEffect } from "react";

const Smoke = () => {
  useEffect(() => {
    document.querySelector(".smoke").playbackRate = 0.5;
  }, []);
  return (
    <video
      autoPlay
      muted
      loop
      className="smoke"
      src="/assets/smoke.mp4"
      style={{
        position: "fixed",
        minWidth: "100vw",
        minHeight: "100vh",
        bottom: "0",
        left: "0",
        zIndex: "-1",
        opacity: "0.1"
      }}
    />
  );
};

export default Smoke;
