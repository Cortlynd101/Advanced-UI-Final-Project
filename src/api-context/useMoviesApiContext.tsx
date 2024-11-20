import { createContext, useContext } from "react";

export interface ApiMovie {
  name: string;
  id: number;
  genre: string;
  runtime: string;
  rating: string;
  entranceDate: Date;
  exitDate: Date;
}

export interface MoviesApiContextInterface {
  moviesList: ApiMovie[];
  selectedMovie: ApiMovie | undefined;
  setSelectedMovie: (item: ApiMovie) => void;
  addMovie: (item: ApiMovie) => void;
  isLoading: boolean;
  modifyMovie: (changedMovie: ApiMovie) => void;
  deleteMovie: (deletedMovie: ApiMovie) => void;
}

export const moviesApiContext = createContext<MoviesApiContextInterface>({
  moviesList: [],
  selectedMovie: undefined,
  setSelectedMovie: () => {},
  addMovie: () => {},
  isLoading: false,
  modifyMovie: () => {},
  deleteMovie: () => {},
});

export const useMoviesApiContext = () => useContext(moviesApiContext);