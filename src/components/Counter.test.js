import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('Counter renders initial value provided in props', () => {
  const { getByText } = render(<Counter value={5} />);
  const counterElement = getByText(/Counter value:/);
  expect(counterElement).toHaveTextContent('Counter value: 5');
});

test('Clicking on decrement button decrements the value', () => {
  const { getByText } = render(<Counter value={10} />);
  const decrementBtn = getByText('Decrement');
  fireEvent.click(decrementBtn);
  const counterElement = getByText(/Counter value:/);
  expect(counterElement).toHaveTextContent('Counter value: 9');
});

test('Clicking on increment button increments the value', () => {
  const { getByText } = render(<Counter value={0} />);
  const incrementBtn = getByText('Increment');
  fireEvent.click(incrementBtn);
  const counterElement = getByText(/Counter value:/);
  expect(counterElement).toHaveTextContent('Counter value: 1');
});
