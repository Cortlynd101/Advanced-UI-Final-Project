import { createContext, useContext } from "react";

export interface ApiGame {
  name: string;
  id: string;
  genre: string;
  hoursPlayed: string;
  howLongToBeat: string;
}

export interface GamesApiContextInterface {
  gamesList: ApiGame[];
  selectedGame: ApiGame | undefined;
  setSelectedGame: (item: ApiGame) => void;
  addGame: (item: ApiGame) => void;
  isLoading: boolean;
  modifyGame: (changedGame: ApiGame) => void;
  deleteGame: (deletedGame: ApiGame) => void;
}

export const gamesApiContext = createContext<GamesApiContextInterface>({
  gamesList: [],
  selectedGame: undefined,
  setSelectedGame: () => {},
  addGame: () => {},
  isLoading: false,
  modifyGame: () => {},
  deleteGame: () => {},
});

export const useGamesApiContext = () => useContext(gamesApiContext);