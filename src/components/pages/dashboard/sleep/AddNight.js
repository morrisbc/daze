import React, { useState } from "react";

const AddNight = () => {
  const [quality, setQuality] = useState("");

  return (
    <section className="text-white mt-3">
      <form className="mt-2">
        <div className="form-group">
          <label htmlFor="night-hours">Hours Slept</label>
          <input
            className="form-control text-white bg-transparent"
            type="number"
            id="night-hours"
            min="0"
            max="24"
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div className="d-flex align-items-center form-group">
          <label className="mr-2 my-0" htmlFor="night-rested">
            Rested
          </label>
          <input
            className="mr-2"
            type="radio"
            name="night-quality"
            id="night-rested"
            value="rested"
            onChange={e => setQuality(e.target.value)}
          />
          <label className="mx-2 my-0" htmlFor="night-tired">
            Tired
          </label>
          <input
            className="mr-2"
            type="radio"
            name="night-quality"
            id="night-tired"
            value="tired"
            onChange={e => setQuality(e.target.value)}
          />
          <label className="mx-2 my-0" htmlFor="night-other">
            Other
          </label>
          <input
            className="mr-2"
            type="radio"
            name="night-quality"
            id="night-other"
          />
          <input
            className="form-control bg-transparent text-white"
            type="text"
            id=""
            onChange={e => setQuality(e.target.value)}
            style={{ maxWidth: "300px" }}
          />
        </div>
        <input className="btn btn-main" type="submit" value="Add Night" />
      </form>
    </section>
  );
};

export default AddNight;
