import "./ActivityDisplay.css";

const ActivityDisplay = (props) => {
  return (
    <div className="activity-area">
      {props.activityData.map((item) => (
        <div className="inner" key={item.id}>
          {item.activity}
        </div>
      ))}
    </div>
  );
};

export default ActivityDisplay;
