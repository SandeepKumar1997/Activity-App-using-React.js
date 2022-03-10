import logo from "./logo.svg";
import "./App.css";
import NewActivity from "./components/NewActivity";
import Card from "./components/Card";
import ActivityDisplay from "./components/ActivityDisplay";
import { useState } from "react";

const ActivityData = [
  {
    id: "e1",
    activity: "Demo 1",
  },
  {
    id: "e2",
    activity: "Demo 2",
  },
  {
    id: "e3",
    activity: "Demo 3",
  },
];

function App() {
  useState(ActivityData);
  const [varActivityData, setActivity] = useState(ActivityData);

  const activityHandler = (activities) => {
    setActivity((prev) => {
      return [activities, ...prev];
    });
  };

  return (
    <div className="parent-frame">
      <div className="project-title">
        <h1>Activity App</h1>
      </div>
      <div className="activity-form">
        <NewActivity activityData={activityHandler}></NewActivity>
      </div>
      <div className="activity-display-area">
        <Card>
          <ActivityDisplay activityData={varActivityData}></ActivityDisplay>
        </Card>
      </div>
    </div>
  );
}

export default App;
