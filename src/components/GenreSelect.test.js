import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenreSelect from './GenreSelect';

describe('GenreSelect', () => {
  const genres = ['Action', 'Comedy', 'Drama', 'Horror'];
  const selectedGenre = 'Comedy';
  const handleSelect = jest.fn();

  it('renders all genres passed in props', () => {
    const { getByText } = render(<GenreSelect genres={genres} onSelect={handleSelect} />);
    genres.forEach((genre) => expect(getByText(genre)).toBeInTheDocument());
  });

  it('highlights the selected genre passed in props', () => {
    const { getByText } = render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={handleSelect} />);
    expect(getByText(selectedGenre)).toHaveClass('selected');
  });

  it('calls onChange callback and passes correct genre in arguments after a genre button is clicked', () => {
    const { getByText } = render(<GenreSelect genres={genres} onSelect={handleSelect} />);
    fireEvent.click(getByText(selectedGenre));
    expect(handleSelect).toHaveBeenCalledWith(selectedGenre);
  });
});
