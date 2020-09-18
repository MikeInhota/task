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
    let project = e.target.innerHTML
    if(project === "(Todos)") project = "";
      this.props.filter(e.target.innerHTML);
      console.log(project)
  }

  render() {
    return (
      <>
        <h3>Projetos</h3>
        <ul>
          <li onClick={this.handleClickProject.bind(this)}>(Todos)</li>
          {this.props.projects.map((project) => (
            <li Key={project.name} onClick={this.handleClickProject.bind(this)}>{project.name}</li>
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
