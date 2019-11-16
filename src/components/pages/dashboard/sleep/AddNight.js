import React, { useState } from "react";
import SleepForm from "./SleepForm";

const AddNight = () => {
  const [closed, setClosed] = useState(false);

  return (
    <section className="text-white mt-5 mb-3">
      <button
        className="d-flex justify-content-between align-items-center w-100"
        style={{
          background: "none",
          color: "white",
          border: "none",
          borderBottom: "1px solid white"
        }}
        onClick={() => setClosed(!closed)}
      >
        <h3>Add Night</h3>
        <i
          className={`fas fa-${closed ? "plus" : "minus"}`}
          style={{ fontSize: "1.5rem" }}
        ></i>
      </button>
      <div style={{ display: closed ? "none" : "block" }}>
        <SleepForm submitText="Add Night" />
      </div>
    </section>
  );
};

export default AddNight;
