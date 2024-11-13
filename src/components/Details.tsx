import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";

function Details() {
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
        <p>Name: {selectedMovie?.name}</p>
        <p>Genre: {selectedMovie?.genre}</p>
        <p>Runtime: {selectedMovie?.runtime}</p>
        <p>Rating: {selectedMovie?.rating}</p>
      </div>
    </>
  );
}

export default Details;