import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../../../firebase/context";
import SleepForm from "./SleepForm";

const Night = ({
  night: { bedTime, wakeTime, rested, tired, headache, sick, notes },
  id
}) => {
  const firebaseContext = useContext(FirebaseContext);
  const { getDatabase } = firebaseContext;
  const db = getDatabase();

  const bedTimeDate = new Date(bedTime);

  const [closed, setClosed] = useState(true);
  const [edit, setEdit] = useState(false);
  const [bedTimeState, setBedTimeState] = useState(bedTime);
  const [wakeTimeState, setWakeTimeState] = useState(wakeTime);

  const deleteNight = () => {
    if (window.confirm("Delete this night?")) {
      db.collection("nights")
        .doc(id)
        .delete();
    }
  };

  const editNight = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <li id={id} className="my-3">
      <div
        className="card bg-transparent border-white"
        style={{ borderRadius: "10px" }}
      >
        <button
          className="card-header d-flex flex-column justify-content-center border-white bg-transparent"
          style={{
            color: "white",
            borderLeft: "none",
            borderRight: "none",
            borderTop: "none",
            borderBottom: closed ? "none" : "1px solid white",
            textAlign: "left"
          }}
          onClick={() => setClosed(!closed)}
        >
          <h4 className="mb-0">{bedTimeDate.toDateString()}</h4>
          <div>
            {rested && (
              <span className="night-icon" role="img" aria-label="rested">
                🙂
              </span>
            )}
            {tired && (
              <span className="night-icon" role="img" aria-label="tired">
                🥱
              </span>
            )}
            {headache && (
              <span className="night-icon" role="img" aria-label="headache">
                🤕
              </span>
            )}
            {sick && (
              <span className="night-icon" role="img" aria-label="sick">
                🤒
              </span>
            )}
          </div>
          <i
            className={`fas fa-${closed ? "plus" : "minus"}`}
            style={{ position: "absolute", right: "20px", fontSize: "1.25rem" }}
          ></i>
        </button>
        <div className={`card-body night-${closed ? "closed" : "open"}`}>
          <SleepForm edit={edit} submitText="Edit Night" />
          <input
            type="submit"
            className="btn btn-main mr-2"
            style={{ display: edit ? "inline-block" : "none" }}
            value="Edit Night"
          />
          <input
            type="button"
            className="btn btn-secondary mx-2"
            style={{ display: edit ? "inline-block" : "none" }}
            onClick={() => {
              setEdit(false);
              setBedTimeState(bedTime);
              setWakeTimeState(wakeTime);
            }}
            value="Cancel"
          />
          <button
            onClick={deleteNight}
            style={{
              display: edit ? "none" : "inline-block",
              background: "none",
              border: "none",
              color: "red",
              width: "auto"
            }}
          >
            <i className="fa fa-times" style={{ fontSize: "1.25rem" }}></i>
          </button>
          <button
            className="ml-3"
            onClick={() => setEdit(!edit)}
            style={{
              display: edit ? "none" : "inline-block",
              background: "none",
              border: "none",
              color: "gold",
              width: "auto"
            }}
          >
            <i className="fa fa-pencil-alt"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

Night.propTypes = {
  night: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default Night;
