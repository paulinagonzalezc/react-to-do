import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    const { todos, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = { todos: PropTypes.shape().isRequired };
TodosList.propTypes = { handleChangeProps: PropTypes.func.isRequired };
TodosList.propTypes = { deleteTodoProps: PropTypes.func.isRequired };

export default TodosList;
