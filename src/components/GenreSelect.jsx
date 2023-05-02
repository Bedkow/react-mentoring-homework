import React from 'react';
import './GenreSelect.css';

const GenreSelect = ({
	genres = ['horror', 'comedy'],
	selectedGenre,
	onSelect,
}) => {
	const handleGenreClick = (genre) => {
		onSelect(genre);
	};

	const genreButtons = genres.map((genre) => (
		<button
			key={genre}
			onClick={() => handleGenreClick(genre)}
			className={genre === selectedGenre ? 'selected' : ''}
		>
			{genre}
		</button>
	));

	return (
		<div>
			<button
				key={'All'}
				onClick={() => handleGenreClick('All')}
				className={'All' === selectedGenre ? 'selected' : ''}
			>
				All
			</button>
			{genreButtons}
		</div>
	);
};

export default GenreSelect;
