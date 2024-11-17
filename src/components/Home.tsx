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
        {/* <h1>Welcome to the home page </h1> */}
        <h1>List of Movies Currently In The Theatre: </h1>
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
                    {movie?.exitDate.toString() == "2024-12-05T00:00:00" && (
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
            Click to view our the details of the selected movie.
            {selectedMovie?.id}.
          </Link>
          <Link to={"tickets/" + selectedMovie?.id}>
            Click to purhcase a ticket for the selected movie.
            {selectedMovie?.id}.
          </Link>
        </div>
      </div>
      <Toast></Toast>
    </>
  );
}

export default Home;