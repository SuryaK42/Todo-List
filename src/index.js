import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import AddTask from "./AddTask";
import "./index.css";

//1
const ToDoList = () => {
  //6
  const addTask = (text) => {
    updateTask([...tasks, { text }]);
  };

  const [tasks, updateTask] = useState([
    {
      text: "Wake Up",
      isCompleted: false,
    },
  ]);
  //2
  const toggleTask = (index) => {
    const newTask = [...tasks];
    if (newTask[index].isCompleted) {
      newTask[index].isCompleted = false;
    } else {
      newTask[index].isCompleted = true;
    }
    updateTask(newTask);
  };
  //3
  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    updateTask(newTask);
  };

  return (
    <>
      <h1>Day Routine</h1>
      <div className="to-do-list">
        {tasks.map((task, index) => (
          <div className="to-do-list-is">
            <span
              onClick={() => toggleTask(index)}
              className={
                task.isCompleted ? "task-name isCompleted-task" : "task-name"
              }
            >
              {index} - {task.text} {task.isCompleted}
            </span>
            <button onClick={() => removeTask(index)}>Delete</button>
          </div>
        ))}
        <AddTask addTask={addTask} />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoList />);
// ReactDOM.render(<ToDoList /> ,document.getElementById('root'));
