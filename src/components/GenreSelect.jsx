import React from 'react';
import './GenreSelect.css';

const GenreSelect = ({genres, selectedGenre, onSelect}) => {

  const handleGenreClick = (genre) => {
    onSelect(genre);
  };

  const genreButtons = genres.map(genre => (
    <button
      key={genre}
      onClick={() => handleGenreClick(genre)}
      className={genre === selectedGenre ? 'selected' : ''}
    >
      {genre}
    </button>
  ))

  return <div>{genreButtons}</div>
}

export default GenreSelect;
