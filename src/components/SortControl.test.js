import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import SortControl from './SortControl';

describe('SortControl', () => {
  it('renders the component with label and options', () => {
    const {getByLabelText, getByDisplayValue} = render(
      <SortControl currentSelection="release-date" />
    );
    expect(getByLabelText('Sort By')).toBeInTheDocument();
    expect(getByDisplayValue('Release Date')).toBeInTheDocument();
    expect(getByDisplayValue('Title')).toBeInTheDocument();
  });

  it('changes the selected option when user clicks on an option', () => {
    let selection = 'release-date';
    const handleSelection = jest.fn(e => {
      selection = e.target.value;
    });

    const {getByDisplayValue} = render(
      <SortControl currentSelection={selection} handleSelection={handleSelection} />
    );

    fireEvent.change(getByDisplayValue('Title'), {target: {value:'title'}});
    expect(selection).toBe('title');
    expect(handleSelection).toHaveBeenCalled();
  });
});
