import React, { useState, useEffect, useContext } from "react";
import FirebaseContext from "../../../firebase/context";

const DailyGoals = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { addAuthObserver, getDatabase } = firebaseContext;
  const db = getDatabase();

  const [sleep, setSleep] = useState(0);
  const [diet, setDiet] = useState(0);
  const [exercise, setExercise] = useState(0);
  const [goalsId, setGoalsId] = useState(null);

  const [success, setSuccess] = useState(null);
  const [err, setErr] = useState(null);

  const onSubmit = e => {
    e.preventDefault();

    db.collection("dailyGoals")
      .doc(goalsId)
      .set({ sleep, diet, exercise }, { merge: true })
      .then(() => setSuccess("Goals successfully updated."))
      .catch(() =>
        setErr("There was an issue updating goals. Please try again.")
      );
  };

  useEffect(() => {
    addAuthObserver(user => {
      if (user) {
        db.collection("dailyGoals")
          .where("user", "==", user.uid)
          .get()
          .then(snap => {
            const { sleep, diet, exercise } = snap.docs[0].data();
            setSleep(sleep);
            setDiet(diet);
            setExercise(exercise);
            setGoalsId(snap.docs[0].id);
          });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <section className="text-white mt-3">
      <h3 className="border-bottom pb-2">Daily Goals</h3>
      <form
        className="d-flex flex-column align-items-center mt-3"
        onSubmit={onSubmit}
      >
        <div className="w-100 d-flex flex-column flex-md-row justify-content-around">
          <div className="form-group">
            <label htmlFor="sleep-goal">Sleep Goal (hours)</label>
            <input
              className="form-control text-white bg-transparent"
              type="number"
              id="sleep-goal"
              style={{ minWidth: "200px" }}
              step="0.5"
              min="0"
              max="24"
              onChange={e => setSleep(parseFloat(e.target.value))}
              value={sleep}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="diet-goal">Diet Goal (calories)</label>
            <input
              className="form-control text-white bg-transparent"
              type="number"
              id="diet-goal"
              style={{ minWidth: "200px" }}
              min="0"
              max="15000"
              onChange={e => setDiet(parseInt(e.target.value))}
              value={diet}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exercise-goal">Exercise Goal (minutes)</label>
            <input
              className="form-control text-white bg-transparent"
              type="number"
              id="exercise-goal"
              style={{ minWidth: "200px" }}
              min="0"
              onChange={e => setExercise(parseInt(e.target.value))}
              value={exercise}
              required
            />
          </div>
        </div>
        <input
          className="btn btn-block btn-main mt-3"
          type="submit"
          value="Set Goals"
          style={{ maxWidth: "200px" }}
        />
      </form>
      {success && <p className="text-center mt-2">{success}</p>}
      {err && <p className="text-warning text-center mt-2">{err}</p>}
    </section>
  );
};

export default DailyGoals;
