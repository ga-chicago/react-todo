import React, { Component } from 'react';

class Todo extends Component {

  constructor(){
    super()
  }

  render(){
    return(
      <li>
        <input type="checkbox" onChange={this.handleChecked} checked={this.props.complete}/>
        <span>{this.props.task}</span>
      </li>
    )
  }

  handleChecked = () => {
    this.props.onTodoClick(this.props.index);
  }
}

export default Todo;
