import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.PureComponent {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button type="submit" onClick={() => deleteTodoProps(todo.id)}>Delete</button>
        {todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = { todo: PropTypes.shape().isRequired };
TodoItem.propTypes = { handleChangeProps: PropTypes.func.isRequired };
TodoItem.propTypes = { deleteTodoProps: PropTypes.func.isRequired };

export default TodoItem;
