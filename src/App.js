import React, { Component } from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {data: [
                          {name:"Groceries", complete: true},
                          {name:"Go to Bank", complete: false}
                        ]}
  }

  render() {
    console.log(this.props.key)
    return (
      <div>
        <TodoForm onTodoSubmit={this.createTodo}/>
        <ul>
          {this.state.data.map((todo, index) => {
            return (
              <Todo task={todo.name} complete={todo.complete} onTodoClick={this.checkTodo} key={index} index={index}/>
            )
          })}
        </ul>
      </div>
    );
  }

  checkTodo = (index) => {
    let updatedState = this.state;
    updatedState.data[index].complete = !updatedState.data[index].complete;
    this.setState(updatedState);
    console.log(this.state)
  }

  createTodo = (task) => {
    let updatedState = this.state;
    updatedState.data.push({name:task, complete: false});
    this.setState(updatedState);
  }

}

export default App;
