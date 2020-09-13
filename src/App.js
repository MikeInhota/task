import React, { Component } from 'react';
import Task from './components/task/Task';
import './App.css';
import Form from './components/form/Form';
import Projects from './components/projects/projects';

class App extends Component {

  constructor() {

    super()
    this.state = {
      tasks: [],
      projects: [
        { name: 'Tcc' },
        { name: 'Bootcamp' }
      ],
      filter:''
    }
  }

  addTask(task) { this.setState({ tasks: [...this.state.tasks, task] }) }
  addProject(project) { this.setState({ projects: [...this.state.projects, project] }) }

  deleteTask(index) {
    let newTasks = this.state.tasks;
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks });
  }

  increment(index) {
    let task = this.state.tasks[index];
    task.status += 10;
    if (task.status > 100) task.status = 100;
    let newTasks = this.state.tasks;
    newTasks.splice(index, 1, task);
    this.setState({ tasks: newTasks });
  }

  decrement(index) {
    let task = this.state.tasks[index];
    task.status -= 10;
    if (task.status < 0) task.status = 0;
    let newTasks = this.state.tasks;
    newTasks.splice(index, 1, task);
    this.setState({ tasks: newTasks });
  }

  filter(project){
    this.setState({filter:project})
  }

  render() {
    return (
      <div className="container">
        <section>
          <Form 
            addTask={this.addTask.bind(this)}
            projects={this.state.projects}
          />
          <Projects 
            projects={this.state.projects}
            addProject={this.addProject.bind(this)}
            filter={this.filter.bind(this)}
          />
        </section>
        <section className="tasks">
          {this.state.tasks
          .filter(task => task.project === this.state.filter)
          .map((task, index) => (
            <Task
              key={index}
              index={index}
              task={task}
              deleteTask={this.deleteTask.bind(this)}
              increment={this.increment.bind(this)}
              decrement={this.decrement.bind(this)}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
