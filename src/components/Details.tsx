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
        <h3>Details for movie id {selectedMovie?.id}.</h3>
        <p>Name: {selectedMovie?.name}</p>
        <p>Genre: {selectedMovie?.genre}</p>
        <p>Runtime: {selectedMovie?.runtime}</p>
        <p>IMDB Rating: {selectedMovie?.rating}</p>
        <p>Entrance date: {selectedMovie?.entrance_date.toString().slice(0, 10)}</p>
        <p>Exit date: {selectedMovie?.exit_date.toString().slice(0, 10)}</p>
      </div>
    </>
  );
}

export default Details;