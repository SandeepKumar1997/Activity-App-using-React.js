import NewActivityForm from "./NewActivityForm.js";

const NewActivity = (props) => {

const activityAddHandler=(enteredActivity)=>{
  const activityItems={
    ...enteredActivity,
    id:Math.random().toString()
  }


  props.activityData(activityItems);
}

  return (
    <div>
      <NewActivityForm onNewActivityAddition={activityAddHandler}></NewActivityForm>
    </div>
  );
};

export default NewActivity;
