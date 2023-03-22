import React from 'react';
import './GenreSelect.css';

class GenreSelect extends React.Component {
	handleGenreClick = (genre) => {
		this.props.onSelect(genre);
	};

	render() {
		const genres = this.props.genres.map((genre) => {
			return React.createElement(
				'button',
				{
					onClick: () => this.handleGenreClick(genre),
					className: genre === this.props.selectedGenre ? 'selected' : '',
				},
				genre
			);
		});
		return React.createElement('div', null, ...genres);
	}
}

export default GenreSelect;
