import React, { useState } from "react";
//4
const AddTask = (props) => {
  //5
  const [value, updateValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      props.addTask(value);
      updateValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Your Routine..."
        onChange={(e) => updateValue(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};
export default AddTask;
