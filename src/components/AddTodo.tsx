import React, { useState } from 'react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;