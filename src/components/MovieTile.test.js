import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieTile from './MovieTile';

const defaultProps = {
  imgUrl: 'https://placekitten.com/200/300',
  movieName: 'Example Movie',
  releaseYear: 2021,
  genresList: ['Action', 'Drama'],
  handleClick: jest.fn(),
};

describe('MovieTile', () => {
  it('renders the component with the correct props', () => {
    const { getByAltText, getByText, getAllByRole } = render(
      <MovieTile {...defaultProps} />
    );
    expect(getByAltText('').getAttribute('src')).toBe(defaultProps.imgUrl);
    expect(getByText(defaultProps.movieName)).toBeInTheDocument();
    expect(getByText(defaultProps.releaseYear)).toBeInTheDocument();
    const genreItems = getAllByRole('listitem');
    expect(genreItems).toHaveLength(defaultProps.genresList.length);
    genreItems.forEach((item, index) => {
      expect(item).toHaveTextContent(defaultProps.genresList[index]);
    });
  });

  it('calls handleClick function when clicked', () => {
    const { getByRole } = render(<MovieTile {...defaultProps} />);
    const movieTile = getByRole('presentation');
    fireEvent.click(movieTile);
    expect(defaultProps.handleClick).toHaveBeenCalled();
  });
});
