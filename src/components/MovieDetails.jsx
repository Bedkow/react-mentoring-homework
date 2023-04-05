export default function MovieDetails({
  isActive,
  imgUrl,
  movieName,
  releaseYear,
  rating,
  duration,
  description,
}) {
  return (
    <>
      {isActive && (
        <div className="movie-details">
          <img alt="" src={imgUrl} />
          <div>{movieName}</div>
          <div>{releaseYear}</div>
          <div>{rating}</div>
          <div>{duration} min</div>
          <div>{description}</div>
        </div>
      )}
    </>
  );
}
