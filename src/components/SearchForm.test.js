import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  test('renders an input with the value equal to initial value passed in props', () => {
    const initialValue = 'initial';
    const { getByDisplayValue } = render(
      <SearchForm initialQuery={initialValue} onSearch={() => {}} />
    );
    expect(getByDisplayValue(initialValue)).toBeInTheDocument();
  });

  test('calls onChange prop with proper value after typing to the input and a "click" event on the Submit button', () => {
    const onSearch = jest.fn();
    const { getByText, getByDisplayValue } = render(
      <SearchForm initialQuery="" onSearch={onSearch} />
    );

    const query = 'test query';
    const input = getByDisplayValue('');
    fireEvent.change(input, { target: { value: query } });
    fireEvent.click(getByText('Search'));
    expect(onSearch).toHaveBeenCalledWith(query);
  });

  test('calls onChange prop with proper value after typing to the input and pressing Enter key', () => {
    const onSearch = jest.fn();
    const { getByDisplayValue } = render(
      <SearchForm initialQuery="" onSearch={onSearch} />
    );

    const query = 'test query';
    const input = getByDisplayValue('');
    fireEvent.change(input, { target: { value: query } });
    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(onSearch).toHaveBeenCalledWith(query);
  });
});
