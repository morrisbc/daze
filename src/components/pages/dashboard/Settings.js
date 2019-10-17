import React, { Fragment } from "react";

const Settings = () => {
  return (
    <Fragment>
      <section className="text-white mt-3">
        <h3 className="text-center">Daily Goals</h3>
        <form className="d-flex flex-column align-items-center mt-3">
          <div className="w-100 d-flex flex-column flex-md-row justify-content-around">
            <div className="form-group">
              <label htmlFor="sleep-goal">Sleep Goal (hours)</label>
              <input
                className="form-control text-white bg-transparent"
                type="number"
                id="sleep-goal"
                style={{ minWidth: "200px" }}
                min="1"
                max="24"
              />
            </div>
            <div className="form-group">
              <label htmlFor="diet-goal">Diet Goal (calories)</label>
              <input
                className="form-control text-white bg-transparent"
                type="number"
                id="diet-goal"
                style={{ minWidth: "200px" }}
                min="1"
                max="15000"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exercise-goal">Exercise Goal (minutes)</label>
              <input
                className="form-control text-white bg-transparent"
                type="number"
                id="exercise-goal"
                style={{ minWidth: "200px" }}
                min="1"
              />
            </div>
          </div>
          <input
            className="btn btn-block btn-main mt-3"
            type="submit"
            value="Set Goals"
            style={{ maxWidth: "300px" }}
          />
        </form>
      </section>
    </Fragment>
  );
};

export default Settings;
