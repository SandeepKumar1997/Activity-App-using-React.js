import React, { useState } from "react";
import "./NewActivityForm.css";

const NewActivityForm = (props) => {
  const [inputData, setInputData] = useState("");

  const inputHandler = (event) => {
    setInputData(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const activityItems = {
      activity: inputData,
    };
    setInputData("");
    props.onNewActivityAddition(activityItems);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="input-content-area">
          <label>Enter your activity</label>
          <input type="text" value={inputData} onChange={inputHandler}></input>
        </div>
        <div className="buttons-area">
          <button type="submit">Add Activity</button>
        </div>
      </form>
    </div>
  );
};

export default NewActivityForm;
