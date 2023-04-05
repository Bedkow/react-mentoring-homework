import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from './MovieDetails';

const defaultProps = {
  isActive: true,
  imgUrl: 'https://example.com/image.jpg',
  movieName: 'Example Movie',
  releaseYear: 2021,
  rating: 5,
  duration: 90,
  description: 'An example description',
};

describe('MovieDetails', () => {
  it('renders the component if isActive is true', () => {
    const { getByAltText, getByText } = render(
      <MovieDetails {...defaultProps} />
    );
    expect(getByAltText('').getAttribute('src')).toBe(defaultProps.imgUrl);
    expect(getByText(defaultProps.movieName)).toBeInTheDocument();
    expect(getByText(defaultProps.releaseYear)).toBeInTheDocument();
    expect(getByText(defaultProps.rating)).toBeInTheDocument();
    expect(getByText(`${defaultProps.duration} min`)).toBeInTheDocument();
    expect(getByText(defaultProps.description)).toBeInTheDocument();
  });

  it('does not render the component if isActive is false', () => {
    const { queryByAltText, queryByText } = render(
      <MovieDetails {...defaultProps} isActive={false} />
    );
    expect(queryByAltText('')).not.toBeInTheDocument();
    expect(queryByText(defaultProps.movieName)).not.toBeInTheDocument();
    expect(queryByText(defaultProps.releaseYear)).not.toBeInTheDocument();
    expect(queryByText(defaultProps.rating)).not.toBeInTheDocument();
    expect(queryByText(`${defaultProps.duration} min`)).not.toBeInTheDocument();
    expect(queryByText(defaultProps.description)).not.toBeInTheDocument();
  });
});
