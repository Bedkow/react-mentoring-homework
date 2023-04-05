export default function MovieTile({
  imgUrl,
  movieName,
  releaseYear,
  genresList,
  handleClick,
}) {
  return (
    <div className="movie-tile" onClick={handleClick}>
      <img src={imgUrl} alt="" />
      <div>{movieName}</div>
      <div>{releaseYear}</div>
      <ul>
        {genresList.map((genre) => {
          return <li key={genre}>{genre}</li>;
        })}
      </ul>
    </div>
  );
}
