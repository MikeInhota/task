import React, { Component } from "react";

import "./style.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      status: 10,
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
            <option>Selecione ou adicione um projeto ...</option>
          {this.props.projects.map((project) => (
            <option>{project.name}</option>
          ))}
        </select>
        <button>Salvar</button>
      </form>
    );
  }
}

export default Form;
