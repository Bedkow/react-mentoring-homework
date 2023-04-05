import './App.css';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';
import genreData from './data/genres.json';
import moviesData from './data/movies.json'; 
import React from 'react';
import ReactDOM from 'react-dom';
import MovieTile from './components/MovieTile';
import MovieDetails from './components/MovieDetails';
import SortControl from './components/SortControl';
import { useState } from 'react';

export default function App() {
  const [currentSelection, setCurrentSelection] = useState("title");

  const handleSelection = (e) => {
    setCurrentSelection(e.target.value)
    console.log(`current selection: ${e.target.value}`)
  }

  function handleClick () {
    console.log('clicked');
  };

  return (
    <div>
      <Counter value={0} />
      <SearchForm
        initialQuery={'query'}
        onSearch={(query) => {
          console.log(query);
        }}
      />
      <GenreSelect
        genres={genreData.genres}
        selectedGenre="Thriller"
        onSelect={(genre) => console.log(`Selected genre: ${genre}`)}
      />
      <MovieTile
        imgUrl={'https://placekitten.com/200/300'}
        movieName="Random Cat"
        releaseYear={2023}
        genresList={['cats', 'pets']}
        handleClick={handleClick}
      />
	  <MovieDetails isActive={true} movieName="cat" releaseYear={2000} rating={6.9} duration={153} description={"Leading AI academics and industry experts - including Steve Wozniak and Elon Musk, published an open letter today calling for a pause on developing more sophisticated AI beyond OpenAI's GPT-4. The letter cites risks to society and humanity as a major concern and asks for the pause to enable the industry to develop shared safety protocols."}/>
	  <MovieDetails isActive={false} movieName="dog" releaseYear={2021} rating={1.7} duration={150} description={"Leading AI academics and industry experts - including Steve Wozniak and Elon Musk, published an open letter today calling for a pause on developing more sophisticated AI beyond OpenAI's GPT-4. The letter cites risks to society and humanity as a major concern and asks for the pause to enable the industry to develop shared safety protocols."}/>
	  <MovieDetails isActive={false} movieName="bird" releaseYear={2009} rating={3.5} duration={105} description={"Leading AI academics and industry experts - including Steve Wozniak and Elon Musk, published an open letter today calling for a pause on developing more sophisticated AI beyond OpenAI's GPT-4. The letter cites risks to society and humanity as a major concern and asks for the pause to enable the industry to develop shared safety protocols."}/>
    <SortControl currentSelection={currentSelection} handleSelection={handleSelection}/>
    </div>
  );
}
