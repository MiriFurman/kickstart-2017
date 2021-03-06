import React, { Component } from 'react';
import Task from './task';
import './App.css';

class TodoApp extends Component {

  constructor() {
    super();
    this.state = {
      tasks: [Task('do something'), Task('do something else'), Task('one thing more')],
      newTask: ''
    }
  }

  addTask(e) {
    this.setState({
      tasks: [Task(this.state.newTask), ...this.state.tasks],
      newTask: ''
    });
    this.input.focus();
  }

  render() {
    return (
      <div className="todo-app">
        <header>
          Task:<input type="text" value={this.state.newTask} onChange={(e) => this.setState({newTask: e.target.value})} ref={(input) => this.input = input}/><button onClick={e => this.addTask(e)}>Add</button>
        </header>
        <main>
          <ul>
            {this.state.tasks.map((task) => <li className='task'>{task.text}</li>)}
          </ul>
        </main>
      </div>
    );
  }
}

export default TodoApp;
