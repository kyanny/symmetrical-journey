import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: React.FC = () => {
  const [todos, setTodos] = React.useState([]);

  const handleAddTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} onToggle={handleToggleTodo} />
      <AddTodo onAdd={handleAddTodo} />
    </div>
  );
};

export default App;