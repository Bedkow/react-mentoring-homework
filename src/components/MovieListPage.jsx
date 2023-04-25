import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import GenreSelect from "./GenreSelect";
import SortControl from "./SortControl";
import MovieTile from "./MovieTile";
import SearchForm from "./SearchForm";

export default function MovieListPage() {
    [searchQuery, setSearchQuery] = useState("");
    [sortCriterion, setSortCriterion] = useState("");
    [activeGenre, setActiveGenre] = useState("");
    [movieList, setMovieList] = useState([]);
    [selectedMovie, setSelectedMovie] = useState(null);

    const onSubmitQuery = (e) => {
        e.preventDefault();
        setSearchQuery(this.inputRef.current.value);
    }


    return (
        <main> 
            <SearchForm initialQuery={searchQuery} onSubmitQuery={onSubmitQuery}/>
            <GenreSelect/>
            <SortControl/>
            <Counter/>
            {movieList.map((movie)=> {
                <MovieTile/>
            })}
        </main>
    )
}