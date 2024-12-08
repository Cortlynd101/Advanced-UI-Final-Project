import "../App.css";
import { useNavigate } from "react-router-dom";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import Loading from "./Loading";
import Toast from "./Toast";

function Home() {
  const { moviesList, setSelectedMovie } = useMoviesApiContext(); // isLoading
  const isLoading = false;
  const navigate = useNavigate();

  const details = (movieId: number) => {
    navigate("/details/" + movieId);
  };

  const purchaseTickets = (movieId: number) => {
    const movie = moviesList.find(m => m.id === movieId);
    if (movie) {
      setSelectedMovie(movie);
      navigate("/tickets");
    }
  };

  return (
    <>
      <div className="main">
        <h3>Movies Currently In The Theatre Until December 12th</h3>
        <div>
          {isLoading && <Loading />}
          {!isLoading && (
            <div>
              {moviesList.map((movie) => (
                <div
                  className="row"
                  key={movie.id}
                  style={{ cursor: "default" }}
                  onClick={() => setSelectedMovie(movie)}
                >
                  <h5>
                    {movie?.exit_date.toString() == "2024-12-12T00:00:00" && (
                      <div className="col">
                        {movie.name}
                        <button
                          className="btn btn-primary"
                          onClick={() => details(movie.id)}
                          style={{margin: "10px"}}
                        >
                          Details
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => purchaseTickets(movie.id)}
                        >
                          Purchase Tickets
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
      <Toast></Toast>
    </>
  );
}

export default Home;