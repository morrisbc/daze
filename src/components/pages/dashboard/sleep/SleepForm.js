import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../../../firebase/context";
import DateTimeLocal from "./DateTimeLocal";
import NightCheck from "./NightCheck";

const SleepForm = ({ submitText }) => {
  const firebaseContext = useContext(FirebaseContext);
  const { getDatabase, getUserUID } = firebaseContext;
  const db = getDatabase();

  const [bedTime, setBedTime] = useState("");
  const [wakeTime, setWakeTime] = useState("");
  const [rested, setRested] = useState(false);
  const [tired, setTired] = useState(false);
  const [headache, setHeadache] = useState(false);
  const [sick, setSick] = useState(false);
  const [notes, setNotes] = useState("");

  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);

  const onSubmit = e => {
    e.preventDefault();

    if (
      bedTime < wakeTime &&
      new Date(wakeTime).getTime() <= Date.now() &&
      new Date(bedTime).getTime() <= Date.now()
    ) {
      db.collection("nights")
        .add({
          bedTime,
          wakeTime,
          rested,
          tired,
          headache,
          sick,
          notes,
          user: getUserUID()
        })
        .then(() => {
          setErr(null);
          setSuccess("Night added!");

          setBedTime("");
          setWakeTime("");
          setRested(false);
          setTired(false);
          setHeadache(false);
          setSick(false);
          setNotes("");

          setTimeout(() => setSuccess(null), 2000);
        })
        .catch(error => setErr(error.message));
    } else {
      setErr("Night is invalid. Please try again.");
    }
  };

  return (
    <form className="mt-2" onSubmit={onSubmit}>
      <div className="d-flex flex-column flex-md-row justify-content-around">
        <DateTimeLocal
          inputID="bedTime"
          labelText="Went to Bed:"
          className="night-input form-control"
          onChange={e => setBedTime(e.target.value)}
          required
          value={bedTime}
          style={{
            maxWidth: "240px"
          }}
        />
        <DateTimeLocal
          inputID="wakeTime"
          labelText="Woke Up:"
          className="night-input form-control"
          onChange={e => setWakeTime(e.target.value)}
          required
          value={wakeTime}
          style={{
            maxWidth: "240px"
          }}
        />
      </div>

      {/* Date Validation Messages */}
      {bedTime >= wakeTime && bedTime !== "" && wakeTime !== "" && (
        <p className="text-center text-warning">
          Bed Time must be before Wake Time
        </p>
      )}
      {(new Date(bedTime).getTime() > Date.now() ||
        new Date(wakeTime).getTime() > Date.now()) && (
        <p className="text-center text-warning">
          Dates must not be in the future
        </p>
      )}

      <div className="form-group mt-3">
        <NightCheck
          inputID="night-rested"
          text="Well Rested"
          disabled={tired}
          value={rested}
          onChange={e => setRested(e.target.checked)}
        />
        <NightCheck
          inputID="night-tired"
          text="Tired"
          disabled={rested}
          value={tired}
          onChange={e => setTired(e.target.checked)}
        />
        <NightCheck
          inputID="night-headache"
          text="Headache"
          value={headache}
          onChange={e => setHeadache(e.target.checked)}
        />
        <NightCheck
          inputID="night-sick"
          text="Sick"
          value={sick}
          onChange={e => setSick(e.target.checked)}
        />
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
      <input className="btn btn-main" type="submit" value={submitText} />
      {err && <p className="text-warning pt-2">{err}</p>}
      {success && <p className="pt-2">{success}</p>}
    </form>
  );
};

SleepForm.propTypes = {
  submitText: PropTypes.string.isRequired
};

export default SleepForm;
