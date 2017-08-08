import React, {Component} from 'react';


class TodoForm extends Component {

  constructor(){
    super()
    this.state = {inputValue: ""}
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Task..." value={this.state.inputValue} onChange={this.updateInputValue}/>
        <input type="submit" value="create"/>
      </form>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let task = this.state.inputValue;
    this.props.onTodoSubmit(task);

    let updatedState = this.state;
    updatedState.inputValue = "";
    this.setState(updatedState);
    console.log(this.state);
  }

  updateInputValue = (e) => {
    let updatedState = this.state;
    updatedState.inputValue = e.target.value;
    this.setState(updatedState);
  }
}

export default TodoForm;
