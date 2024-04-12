import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../src/components/TodoList';

describe('TodoList', () => {
  test('renders todo items correctly', () => {
    const todos = [
      { id: 1, text: 'Buy groceries', completed: false },
      { id: 2, text: 'Walk the dog', completed: true },
    ];

    const { getByText } = render(<TodoList todos={todos} />);

    expect(getByText('Buy groceries')).toBeInTheDocument();
    expect(getByText('Walk the dog')).toBeInTheDocument();
  });

  test('renders empty message when no todos', () => {
    const todos = [];

    const { getByText } = render(<TodoList todos={todos} />);

    expect(getByText('No todos found')).toBeInTheDocument();
  });
});