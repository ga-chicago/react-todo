import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {data: [
                          {name:"Groceries", complete: false},
                          {name:"Go to Bank", complete: false}
                        ], inputValue: ""}
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Task..." value={this.state.inputValue} onChange={this.updateInputValue}/>
          <input type="submit" value="create"/>
        </form>
        <ul>
          {this.state.data.map((todo, index) => {
            return (
              <li key={index}>
                <input type="checkbox"/>
                <span>{todo.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let updatedState = this.state;
    updatedState.data.push({name: this.state.inputValue, complete: false})
    updatedState.inputValue = "";
    this.setState(updatedState);
  }

  updateInputValue = (e) => {
    let updatedState = this.state;
    updatedState.inputValue = e.target.value;
    this.setState(updatedState);
  }
}

export default App;
