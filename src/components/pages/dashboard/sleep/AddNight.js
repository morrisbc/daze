import React, { useState } from "react";

const AddNight = () => {
  const [bedTime, setBedTime] = useState("");
  const [wakeTime, setWakeTime] = useState("");
  const [rested, setRested] = useState(false);
  const [tired, setTired] = useState(false);
  const [headache, setHeadache] = useState(false);
  const [notes, setNotes] = useState("");

  return (
    <section className="text-white mt-4 mb-3">
      <h3 className="pb-2" style={{ borderBottom: "1px solid white" }}>
        Add Night
      </h3>
      <form className="mt-2">
        <div className="d-flex flex-column flex-md-row justify-content-around">
          <div className="form-group">
            <label htmlFor="bedTime">Went to Bed:</label>
            <input
              id="bedTime"
              type="datetime-local"
              className="night-input form-control"
              onChange={e => setBedTime(e.target.value)}
              style={{ maxWidth: "240px" }}
            />
          </div>
          <div>
            <label htmlFor="wakeTime">Woke Up:</label>
            <input
              id="wakeTime"
              type="datetime-local"
              className="night-input form-control"
              onChange={e => setWakeTime(e.target.value)}
              style={{ maxWidth: "240px" }}
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="form-check my-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="night-rested"
              onChange={e => setRested(e.target.checked)}
              disabled={tired}
            />
            <label className="form-check-label" htmlFor="night-rested">
              Well Rested
            </label>
          </div>
          <div className="form-check my-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="night-tired"
              onChange={e => setTired(e.target.checked)}
              disabled={rested}
            />
            <label className="form-check-label" htmlFor="night-tired">
              Tired
            </label>
          </div>
          <div className="form-check my-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="night-headache"
              onChange={e => setHeadache(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="night-headache">
              Headache
            </label>
          </div>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="night-notes">Notes: ({notes.length}/140)</label>
          <textarea
            id="night-notes"
            className="form-control night-input"
            cols="30"
            rows="5"
            maxLength="140"
            spellCheck
            onChange={e => setNotes(e.target.value)}
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <input className="btn btn-main" type="submit" value="Add Night" />
      </form>
    </section>
  );
};

export default AddNight;
