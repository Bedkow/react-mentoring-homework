import MovieTile from '../components/MovieTile';

export default {
    title: 'MovieTile',
    component: MovieTile
}

export const Showcase = {
    args: {
        imgUrl: "https://placekitten.com/200/300",
        movieName: "Random Cat",
        releaseYear: 2023,
        genresList: ['cats', 'pets'],
        onClick: ()=>{console.log("click")}
    }
}