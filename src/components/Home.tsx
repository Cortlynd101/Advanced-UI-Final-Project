import "../App.css";
import { Link } from "react-router-dom";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import Loading from "./Loading";
import Toast from "./Toast";
// import { useEffect } from "react";

function Home() {
  const { moviesList, selectedMovie, setSelectedMovie } = useMoviesApiContext(); // isLoading
    const isLoading = false;
  return (
    <>
      <div className="main">
        <h1>Welcome to the home page </h1>
        <h1>List of Movies: </h1>
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
                    {selectedMovie?.id == movie.id ? "✓ " : ""}
                    {movie.name}
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
        {/* <div className="row">
          <Link to={"modify/" + selectedMovie?.id}>
            Click to modify or delete the selected item. Item:{" "}
            {selectedMovie?.id}.
          </Link>
        </div> */}
      </div>
      <Toast></Toast>
    </>
  );
}

export default Home;