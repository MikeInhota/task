import React, { Component } from "react";

import "./style.css";

export default class Task extends Component {
  deleteTask() {
    this.props.deleteTask(this.props.index);
  }
  increment() {
    this.props.increment(this.props.index);
  }
  decrement() {
    this.props.decrement(this.props.index);
  }
  render(props) {
    return (
      <div className="card-task">
        <h3>{this.props.task.title}</h3>
        <p>{this.props.task.description}</p>
        <div className="status">
          <span style={{ width: this.props.task.status + "%" }}></span>
        </div>
        <div className="buttonHolder">
          <div className="barr">
            <button className="btn-del" onClick={this.decrement.bind(this)}>
              <span className="material-icons">remove</span>
            </button>
            <button className="btn-del" onClick={this.increment.bind(this)}>
              <span className="material-icons">add</span>
            </button>
          </div>
          <div className="projectName">
            <p>{this.props.task.project}</p>
          </div>
          <button className="btn-del" onClick={this.deleteTask.bind(this)}>
            <span className="material-icons">delete</span>
          </button>
        </div>
      </div>
    );
  }
}
