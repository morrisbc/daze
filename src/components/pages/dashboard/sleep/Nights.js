import React, { useState, useEffect, useContext } from "react";
import FirebaseContext from "../../../firebase/context";
import Night from "./Night";

const Nights = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { addAuthObserver, getDatabase } = firebaseContext;
  const db = getDatabase();

  const [closed, setClosed] = useState(false);
  const [nights, setNights] = useState([]);

  useEffect(() => {
    return addAuthObserver(user => {
      if (user) {
        db.collection("nights")
          .where("user", "==", user.uid)
          .get()
          .then(snap => {
            setNights(snap.docs);
          });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <section className="text-white mt-5">
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
        <h3>Nights</h3>
        <i
          className={`fas fa-${closed ? "plus" : "minus"}`}
          style={{ fontSize: "1.5rem" }}
        ></i>
      </button>
      <ul
        className="mt-2"
        style={{
          display: closed ? "none" : "block",
          overflow: "hidden"
        }}
      >
        {nights.map(doc => (
          <Night key={doc.id} night={doc.data()} />
        ))}
      </ul>
    </section>
  );
};

export default Nights;
