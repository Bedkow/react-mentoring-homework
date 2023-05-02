import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import GenreSelect from './GenreSelect';
import SortControl from './SortControl';
import MovieTile from './MovieTile';
import SearchForm from './SearchForm';
import Counter from './Counter';
import MovieDetails from './MovieDetails';

export default function MovieListPage() {
	const [searchQuery, setSearchQuery] = useState('');
	const [sortCriterion, setSortCriterion] = useState('');
	const [activeGenre, setActiveGenre] = useState("All");
	const [movieList, setMovieList] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);

	useEffect(() => {
		fetch('http://localhost:4000/movies')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				let allMoviesData = data.data;
				setMovieList(allMoviesData);
			});
	}, []);

	console.log(movieList);

	const onSubmitQuery = (e) => {
		e.preventDefault();
		setSearchQuery(e.target.value);
	};

	const onSelectCriterion = (e) => {
		console.log(`select criterion: ${e.target.value}`)
		setSortCriterion(e.target.value);
	};

	const onSelectMovie = (selectedMovieData) => {
		console.log('movie tile selected');
		console.log(selectedMovieData);

		setSelectedMovie(selectedMovieData);
	};

	const handleSelectGenre = (e) => {
		setActiveGenre(e.target.value);
	}

	return (
		<main>
			{!selectedMovie && (
				<SearchForm initialQuery={searchQuery} onSubmitQuery={onSubmitQuery} />
			)}
			{selectedMovie && <MovieDetails isActive={selectedMovie.isActive} imgUrl={selectedMovie.imgUrl} movieName={selectedMovie.movieName} releaseYear={selectedMovie.releaseYear} rating={selectedMovie.rating} duration={selectedMovie.duration} description={selectedMovie.description}/>}
			<GenreSelect genres={["Horror", "Thriller", "Comedy", "Action", "Drama", "Adventure"]} selectedGenre={activeGenre} onSelect={handleSelectGenre}/>
			<SortControl
				currentSelection={sortCriterion}
				handleSelection={onSelectCriterion}
			/>
			{movieList &&
				movieList.map(
					({
						poster_path,
						title,
						release_date,
						genres,
						vote_average,
						runtime,
						overview,
					}) => {
						let date = new Date(release_date);
						let releaseYear = date.getFullYear();
						return (
							<div
								key={`${title}-${releaseYear}-container`}
								onClick={() => {
									onSelectMovie({
										isActive: true,
										imgUrl: poster_path,
										movieName: title,
										releaseYear: releaseYear,
										rating: vote_average,
										duration: runtime,
										description: overview,
									});
								}}
							>
								<MovieTile
									key={`${title}-${releaseYear}`}
									imgUrl={poster_path}
									movieName={title}
									releaseYear={releaseYear}
									genresList={genres}
								/>
							</div>
						);
					}
				)}
		</main>
	);
}
