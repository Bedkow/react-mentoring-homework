import './App.css';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';
import genreData from './data/genres.json';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Counter, { value: 0 }),
			React.createElement(SearchForm, {
				initialQuery: 'query',
				onSearch: (query) => console.log(`Search query: ${query}`),
			}),
			React.createElement(GenreSelect, {
				genres: genreData.genres,
				selectedGenre: 'Thriller',
				onSelect: (genre) => console.log(`Selected genre: ${genre}`),
			})
		);
	}
}

ReactDOM.render(
	React.createElement(App, null),
	document.getElementById('root')
);

export default App;
