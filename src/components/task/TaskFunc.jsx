import React from "react";
import "./style.css";

const Task = ({task, increment, decrement, deleteTask}) => {
  return (
    <div className="card-task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="status">
        <span style={{ width: task.status + "%" }}></span>
      </div>
      <div className="buttonHolder">
        <div className="barr">
          <button
            className="btn-del"
            onClick={() => decrement(task.id)}
          >
            <span className="material-icons">remove</span>
          </button>
          <button
            className="btn-del"
            onClick={() => increment(task.id)}
          >
            <span className="material-icons">add</span>
          </button>
        </div>
        <div className="projectName">
          <p className="name-identifier">{task.project}</p>
        </div>
        <button
          className="btn-del"
          onClick={() => deleteTask(task.id)}
        >
          <span className="material-icons">delete</span>
        </button>
      </div>
    </div>
  );
};

export default Task;
