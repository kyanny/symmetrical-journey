import React from 'react';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle }) => {
  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
    </div>
  );
};

export default TodoItem;