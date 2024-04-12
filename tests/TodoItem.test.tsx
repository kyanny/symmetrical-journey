import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '../src/components/TodoItem';

describe('TodoItem', () => {
  test('renders todo item correctly', () => {
    const todo = {
      id: 1,
      text: 'Buy groceries',
      completed: false,
    };

    const { getByText } = render(<TodoItem todo={todo} onToggle={() => {}} />);

    expect(getByText('Buy groceries')).toBeInTheDocument();
  });

  test('calls onToggle when todo item is clicked', () => {
    const todo = {
      id: 1,
      text: 'Buy groceries',
      completed: false,
    };

    const onToggleMock = jest.fn();

    const { getByText } = render(<TodoItem todo={todo} onToggle={onToggleMock} />);

    fireEvent.click(getByText('Buy groceries'));

    expect(onToggleMock).toHaveBeenCalledWith(1);
  });
});