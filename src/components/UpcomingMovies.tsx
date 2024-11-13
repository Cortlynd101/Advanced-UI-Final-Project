import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";

function UpcomingMovies() {
  const { moviesList, selectedMovie, setSelectedMovie } = useMoviesApiContext();
  const { Id } = useParams();
  useEffect(() => {
    {
      moviesList.map((movie) => (
        <div
          className=""
          key={movie.id}
          style={{ cursor: "default" }}
          onClick={() => setSelectedMovie(movie)}
        >
          <h2>
            {selectedMovie?.id == movie.id ? "✓ " : ""}
            {movie.name}
          </h2>
        </div>
      ));
    }
    console.log(`/details/${Id}`);
  }, [Id, moviesList, selectedMovie?.id, setSelectedMovie]);
  return (
    <>
      <div className="main">
        <h1>Details for movie id {selectedMovie?.id}.</h1>
        <p>Movie's name: {selectedMovie?.name}</p>
        <p>Movie's main genre: {selectedMovie?.genre}</p>
        <p>Hours played: {selectedMovie?.hoursPlayed} hours.</p>
        <p>Movie's length in hours: {selectedMovie?.howLongToBeat} hours.</p>
      </div>
    </>
  );
}

export default UpcomingMovies;