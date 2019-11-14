import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../../../firebase/context";

const Night = ({
  night: { bedTime, wakeTime, rested, tired, headache, sick, notes },
  id
}) => {
  const firebaseContext = useContext(FirebaseContext);
  const { getDatabase } = firebaseContext;
  const db = getDatabase();

  const bedTimeDate = new Date(bedTime);
  const wakeTimeDate = new Date(wakeTime);

  const [closed, setClosed] = useState(true);

  const deleteNight = () => {
    if (window.confirm("Delete this night?")) {
      db.collection("nights")
        .doc(id)
        .delete();
    }
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
          <p>{"Bed Time: " + bedTimeDate.toLocaleString()}</p>
          <p>{"Wake Time: " + wakeTimeDate.toLocaleString()}</p>
          <p>{`Notes: ${notes}`}</p>
          <button
            onClick={deleteNight}
            style={{
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
            style={{
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
