import "../App.css";
import { Link } from "react-router-dom";
import { useGamesApiContext } from "../api-context/useGamesApiContext";
import Loading from "./Loading";
import Toast from "./Toast";
import { useEffect } from "react";

function Home() {
  const { gamesList, selectedGame, setSelectedGame } = useGamesApiContext(); // isLoading
    let isLoading = true;
    useEffect(() => {
      // setTimeout(() => {
      //   console.log("Hello, World!");
      // }, 2000);
      // isLoading = false;
    });
  return (
    <>
      <div className="main">
        <h1>Welcome to the home page </h1>
        <h1>List of Games: </h1>
        <div>
          {!isLoading && <Loading />}
          {isLoading && (
            <div>
              {gamesList.map((game) => (
                <div
                  className=""
                  key={game.id}
                  style={{ cursor: "default" }}
                  onClick={() => setSelectedGame(game)}
                >
                  <h2>
                    {selectedGame?.id == game.id ? "✓ " : ""}
                    {game.name}
                  </h2>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="row">
          <Link to={"details/" + selectedGame?.id}>
            Click to view our the details of the selected item. Item:{" "}
            {selectedGame?.id}.
          </Link>
        </div>
        <div className="row">
          <Link to={"modify/" + selectedGame?.id}>
            Click to modify or delete the selected item. Item:{" "}
            {selectedGame?.id}.
          </Link>
        </div>
      </div>
      <Toast></Toast>
    </>
  );
}

export default Home;