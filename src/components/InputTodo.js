import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { state, props } = this;
    e.preventDefault();
    if (state.title.trim()) {
      props.addTodoProps(state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    const { state, onChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={state.title}
          name="title"
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = { addTodoProps: PropTypes.func.isRequired };
