import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGamesApiContext } from "../api-context/useGamesApiContext";

function Details() {
  const { gamesList, selectedGame, setSelectedGame } = useGamesApiContext();
  let { Id } = useParams();
  useEffect(() => {
    {
      gamesList.map((game) => (
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
      ));
    }
    console.log(`/details/${Id}`);
  }, []);
  return (
    <>
      <div className="main">
        <h1>Details for game id {selectedGame?.id}.</h1>
        <p>Game's name: {selectedGame?.name}</p>
        <p>Game's main genre: {selectedGame?.genre}</p>
        <p>Hours played: {selectedGame?.hoursPlayed} hours.</p>
        <p>Game's length in hours: {selectedGame?.howLongToBeat} hours.</p>
      </div>
    </>
  );
}

export default Details;