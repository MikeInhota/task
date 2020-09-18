import React, { Component } from "react";

import "./style.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id:0,
      title: "",
      description: "",
      status: 0,
      project: "",
    };
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangedescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangeProject(event) {
    this.setState({ project: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({id: Date.now()})
    this.props.addTask(this.state);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <h1>Tasks</h1>
        <input
          type="text"
          placeholder="titulo"
          onChange={this.handleChangeTitle.bind(this)}
        />
        <textarea
          placeholder="descrição"
          onChange={this.handleChangedescription.bind(this)}
        />
        <select onChange={this.handleChangeProject.bind(this)}>
          {this.props.projects.map((project) => (
            <option key={project.name}>{project.name}</option>
          ))}
        </select>
        <button>Salvar</button>
      </form>
    );
  }
}

export default Form;
