import React, { Component } from 'react';
import Task from './components/form/Task';
import './App.css';
import Form from './components/form/Form';

class App extends Component {

  constructor(){

  super()
  this.state = {
    tasks: [
      {title: "estudar", description: "Java"},
      {title: "exercício", description: "Abs"}
    ]
  }
  
  
  
}

addTask(task){
  this.setState({ tasks : [...this.state.tasks, task] })
}

  render(){
    return (
      <>
      <section>
        <Form addTask={this.addTask.bind(this)}/>
      </section>
      <section>
        {this.state.tasks.map((task) => (
          <Task 
            key={task.title}
            title={task.title}
            description={task.description} 
          />
        ) )}
      </section>
      </>
    );
  }
}

export default App;
