import React, { Fragment, useState, useEffect, useContext } from "react";
import FirebaseContext from "../../../firebase/context";
import BarGraph from "../../../graphs/BarGraph";
import AddNight from "./AddNight";
import Nights from "./Nights";

const Sleep = () => {
  const firebaseContext = useContext(FirebaseContext);
  const { addAuthObserver, getDatabase } = firebaseContext;
  const db = getDatabase();

  const [sleepGoal, setSleepGoal] = useState(0);
  const [labels, setLabels] = useState(["1", "2", "3", "4"]);
  const [values, setValues] = useState([]);

  // Courtesy of https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
  const avgValue = values.reduce((a, b) => a + b, 0) / values.length || 0;

  useEffect(() => {
    return addAuthObserver(user => {
      if (user) {
        db.collection("dailyGoals")
          .where("user", "==", user.uid)
          .get()
          .then(snap => {
            const { sleep } = snap.docs[0].data();
            setSleepGoal(sleep);
          });

        db.collection("nights")
          .where("user", "==", user.uid)
          .orderBy("bedTime", "desc")
          .limit(7)
          .onSnapshot(snap => {
            setLabels(
              snap.docs
                .slice(0)
                .reverse()
                .map(doc => {
                  const data = doc.data();
                  const bedTime = new Date(data.bedTime);
                  const bedTimeDateString = bedTime.toLocaleDateString();

                  return bedTimeDateString.substring(
                    0,
                    bedTimeDateString.length - 5
                  );
                })
            );

            setValues(
              snap.docs
                .slice(0)
                .reverse()
                .map(doc => {
                  const data = doc.data();
                  const bedTime = new Date(data.bedTime);
                  const wakeTime = new Date(data.wakeTime);

                  return parseFloat(
                    (wakeTime.getTime() - bedTime.getTime()) / 3600000
                  );
                })
            );
          });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <section>
        <div className="d-flex justify-content-around text-white mt-3 mb-2">
          <h3
            className="sleep-header border-primary pb-1"
            style={{ borderBottom: "2px solid" }}
          >
            Goal: {sleepGoal} hrs
          </h3>
          <h3
            className="sleep-header pb-1"
            style={{ borderBottom: "2px solid gold" }}
          >
            Mean: {avgValue.toFixed(1)} hrs
          </h3>
        </div>
        <BarGraph
          labels={labels}
          values={values}
          unit={"h"}
          goalValue={sleepGoal}
          barColor="#3f808b"
        />
      </section>
      <AddNight />
      <Nights limit={7} />
    </Fragment>
  );
};

export default Sleep;
