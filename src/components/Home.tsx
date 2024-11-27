import "../App.css";
import { Link } from "react-router-dom";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import Loading from "./Loading";
import Toast from "./Toast";

function Home() {
  const { moviesList, selectedMovie, setSelectedMovie } = useMoviesApiContext(); // isLoading
    const isLoading = false;
  return (
    <>
      <div className="main">
        <h3>Movies Currently In The Theatre Until December 5th</h3>
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
                    {movie?.exit_date.toString() == "2024-12-05T00:00:00" && (
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
          <Link to={"details/" + selectedMovie?.id}>
            Click to view our the details of the selected movie
            {" " + selectedMovie?.id}.
          </Link>
          <Link to={"tickets"}>
            Click to purhcase a ticket for the selected movie
            {" " + selectedMovie?.id}.
          </Link>
        </div>
      </div>
      <Toast></Toast>
    </>
  );
}

export default Home;