import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

handleChange = (id) => (
  this.setState((prevState) => ({
    todos: prevState.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }),
  }))
);

delTodo = (id) => {
  const { todos } = this.state;
  this.setState({
    todos: [
      ...todos.filter((todo) => todo.id !== id),
    ],
  });
}

addTodoItem = (title) => {
  const { todos } = this.state;
  const newTodo = {
    id: uuidv4(),
    title,
    completed: false,
  };
  this.setState({
    todos: [...todos, newTodo],
  });
};

setUpdate = (updatedTitle, id) => {
  this.setState((prevState) => ({
    todos: prevState.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatedTitle,
        };
      }
      return todo;
    }),
  }));
}

render() {
  const {
    state, handleChange, delTodo, addTodoItem, setUpdate,
  } = this;
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={state.todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
}
}

export default TodoContainer;
