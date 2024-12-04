import { Link } from "react-router-dom";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import Loading from "./Loading";

function UpcomingMovies() {
  const { moviesList, selectedMovie, setSelectedMovie } = useMoviesApiContext(); // isLoading
  const isLoading = false;
  return (
    <>
      <div className="main">
        <h3>Movies Entering The Theatre December 6th </h3>
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
                  <h5>
                    {movie?.exit_date.toString() == "2024-12-12T00:00:00" && (
                      <div>
                        {selectedMovie?.id == movie.id ? "✓ " : ""}
                        {movie.name}
                      </div>
                    )}
                  </h5>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="row">
          <Link to={"/details/" + selectedMovie?.id}>
            Click to view the details of 
            {" " + selectedMovie?.name}.
          </Link>
        </div>
      </div>
    </>
  );
}

export default UpcomingMovies;