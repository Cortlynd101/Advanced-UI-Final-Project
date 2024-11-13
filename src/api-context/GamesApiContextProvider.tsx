import { FC, ReactNode, useEffect, useState } from "react";
import { GamesApiService } from "./GamesApiService";
import { ApiGame, gamesApiContext } from "./useGamesApiContext";

export const GamesApiContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [gamesList, setGames] = useState<ApiGame[]>([]);
  const [selectedGame, setSelectedGame] = useState<ApiGame | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    GamesApiService.getAll().then((apiData) => {
      setGames(apiData);
      setIsLoading(false);
    });
  }, []);
  const addGame = async (newGame: ApiGame) => {
    setIsLoading(true);
    await GamesApiService.add(newGame);
    const newGames = await GamesApiService.getAll();
    setGames(newGames);
    setIsLoading(false);
  };
  const modifyGame = async (changedGame: ApiGame) => {
    setIsLoading(true);
    // await GamesApiService.delete(changedGame);
    // await GamesApiService.add(changedGame);
    await GamesApiService.modify(changedGame);
    const newGames = await GamesApiService.getAll();
    setGames(newGames);
    setIsLoading(false);
  };
  const deleteGame = async (deletedGame: ApiGame) => {
    setIsLoading(true);
    await GamesApiService.delete(deletedGame);
    const newGames = await GamesApiService.getAll();
    setGames(newGames);
    setIsLoading(false);
  };

  return (
    <gamesApiContext.Provider
      value={{
        gamesList,
        selectedGame,
        setSelectedGame,
        addGame,
        isLoading,
        modifyGame,
        deleteGame,
      }}
    >
      {children}
    </gamesApiContext.Provider>
  );
};