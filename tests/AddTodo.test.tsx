import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTodo from '../src/components/AddTodo';

test('should call onAdd callback with input value when add button is clicked', () => {
  const onAdd = jest.fn();
  const { getByLabelText, getByText } = render(<AddTodo onAdd={onAdd} />);
  const input = getByLabelText('Todo Text');
  const addButton = getByText('Add');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(onAdd).toHaveBeenCalledWith('New Todo');
});