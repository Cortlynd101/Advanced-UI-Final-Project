import { createContext, useContext } from "react";

export interface ApiMovie {
  name: string;
  id: number;
  genre: string;
  runtime: string;
  rating: string;
  entrance_date: Date;
  exit_date: Date;
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
  selectedMovie: {
    id: 0,
    name: "Interstellar",
    genre: "Science Fiction",
    runtime: "2h 49m",
    rating: "8.7",
    entrance_date: new Date("2024-11-29T00:00:00"),
    exit_date: new Date("2024-12-05T00:00:00"),
  },
  setSelectedMovie: () => {},
  addMovie: () => {},
  isLoading: false,
  modifyMovie: () => {},
  deleteMovie: () => {},
});

export const useMoviesApiContext = () => useContext(moviesApiContext);