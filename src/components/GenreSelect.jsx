import './GenreSelect.css';


function GenreSelect({ genreData, selectedGenreList, handleSelectGenre }) {

	return (
		<div className="genre-select">
			<label>Choose a genre</label>
			<ul name="genre-dropdown" id="genre-dropdown">
				{genreData.genres.map((genre) => {
					return (
						<li key={genre.genreName} className="genre-button">
							<input
								type="checkbox"
								name={genre.genreName}
								id={genre.genreName}
                                onChange={handleSelectGenre}
							/>
							<label htmlFor={genre.genreName}>{genre.genreName}</label>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default GenreSelect;
