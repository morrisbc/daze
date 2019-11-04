import React, { useState, useEffect, useContext } from "react";
import Greeting from "../../../Greeting";
import OverviewBar from "./OverviewBar";
import FirebaseContext from "../../../firebase/context";

const Overview = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { addAuthObserver, getDatabase } = firebaseContext;
  const db = getDatabase();

  const [firstName, setFirstName] = useState(null);
  const [sleepGoal, setSleepGoal] = useState(0);
  const [dietGoal, setDietGoal] = useState(0);
  const [exerciseGoal, setExerciseGoal] = useState(0);

  const date = new Date();
  const today = `${date.getMonth() +
    1} / ${date.getDate()} / ${date.getFullYear()}`;

  useEffect(() => {
    return addAuthObserver(user => {
      if (user) {
        setFirstName(user.displayName);
        db.collection("dailyGoals")
          .where("user", "==", user.uid)
          .get()
          .then(snap => {
            const { sleep, diet, exercise } = snap.docs[0].data();
            setSleepGoal(sleep);
            setDietGoal(diet);
            setExerciseGoal(exercise);
          });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="h-100 d-flex flex-column justify-content-center text-center">
      <Greeting firstName={firstName} />
      <h2 className="text-white">{today}</h2>
      <div className="d-flex flex-column flex-md-row w-100">
        <OverviewBar
          value={15}
          unit="minutes"
          goalValue={exerciseGoal}
          activity="Exercise"
        />
        <OverviewBar
          value={8}
          unit="hours"
          goalValue={sleepGoal}
          activity="Sleep"
        />
        <OverviewBar
          value={1200}
          unit="calories"
          goalValue={dietGoal}
          activity="Diet"
        />
      </div>
    </div>
  );
};

export default Overview;
