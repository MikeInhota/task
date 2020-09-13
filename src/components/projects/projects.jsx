import React, { Component } from "react";

class Projects extends Component {
  state = {};

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.addProject({ name: e.target.value });
      e.target.value = "";
    }
  }

  handleClickProject(e){
      this.props.filter(e.target.innerHTML);
  }

  render() {
    return (
      <>
        <h3>Projetos</h3>
        <ul>
          {this.props.projects.map((project) => (
            <li onClick={this.handleClickProject.bind(this)}>{project.name}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Adicionar projeto"
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </>
    );
  }
}

export default Projects;
