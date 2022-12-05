import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: ""
  };
  render() {
    return (
      <form>
        <input 
            type="text" 
            placeholder="Add Todo..." 
            value={this.state.value}/>
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo