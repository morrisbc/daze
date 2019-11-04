import React, { useState } from "react";

const AddNight = () => {
  const [bedTime, setBedTime] = useState("");
  const [wakeTime, setWakeTime] = useState("");
  const [rested, setRested] = useState(false);
  const [tired, setTired] = useState(false);
  const [headache, setHeadache] = useState(false);
  const [sick, setSick] = useState(false);
  const [notes, setNotes] = useState("");
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

      <form
        className="mt-2"
        style={{
          display: closed ? "none" : "block",
          overflow: "hidden"
        }}
      >
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
          <div className="form-check my-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="night-sick"
              onChange={e => setSick(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="night-sick">
              Sick
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
