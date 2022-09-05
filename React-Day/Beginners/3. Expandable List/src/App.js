import { useState } from "react";
import acts from "./activities.json";
import Activity from "./components/Activity";

const App = () => {
  const [activities, setActivities] = useState([]);

  const generateActivities = () => {
    let idx = Math.floor(Math.random() * acts.activities.length) + 1;
    setActivities([...activities, acts.activities[idx]]);

    console.log(idx);
  };

  return (
    <>
      <button onClick={generateActivities}>Generate Activity</button>

      {activities.map((activity, index) => (
        <div key={index}>
          <Activity activity={activity} />
        </div>
      ))}
    </>
  );
};

export default App;
