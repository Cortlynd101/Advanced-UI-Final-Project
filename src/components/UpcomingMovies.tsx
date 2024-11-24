import { Link } from "react-router-dom";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import Loading from "./Loading";

function UpcomingMovies() {
  const { moviesList, selectedMovie, setSelectedMovie } = useMoviesApiContext(); // isLoading
  const isLoading = false;
  return (
    <>
      <div className="main">
        <h1>Upcoming Movies: </h1>
        <div>
          {isLoading && <Loading />}
          {!isLoading && (
            <div>
              {moviesList.map((movie) => (
                <div
                  className=""
                  key={movie.id}
                  style={{ cursor: "default" }}
                  onClick={() => setSelectedMovie(movie)}
                >
                  <h2>
                    {movie?.exit_date.toString() == "2024-12-12T00:00:00" && (
                      <div>
                        {selectedMovie?.id == movie.id ? "✓ " : ""}
                        {movie.name}
                      </div>
                    )}
                  </h2>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="row">
          <Link to={"details/" + selectedMovie?.id}>
            Click to view our the details of the selected item. Item:{" "}
            {selectedMovie?.id}.
          </Link>
        </div>
      </div>
    </>
  );
}

export default UpcomingMovies;