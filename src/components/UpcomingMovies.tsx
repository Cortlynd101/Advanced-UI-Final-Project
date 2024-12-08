import { useNavigate } from "react-router-dom";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import Loading from "./Loading";

function UpcomingMovies() {
  const { moviesList, setSelectedMovie } = useMoviesApiContext(); // isLoading
  const isLoading = false;
  const navigate = useNavigate();

  const details = (movieId: number) => {
    navigate("/details/" + movieId);
  };
  return (
    <>
      <div className="main">
        <h3>Movies Entering The Theatre December 13th </h3>
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
                    {movie?.exit_date.toString() == "2024-12-19T00:00:00" && (
                      <div>
                        {movie.name}
                        <button
                          className="btn btn-primary"
                          onClick={() => details(movie.id)}
                          style={{margin: "10px"}}
                        >
                          Details
                        </button>
                      </div>
                    )}
                  </h5>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UpcomingMovies;