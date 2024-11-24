import { FC, ReactNode, useEffect, useState } from "react";
import { MoviesApiService } from "./MoviesApiService";
import { ApiMovie, moviesApiContext } from "./useMoviesApiContext";

export const MoviesApiContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [moviesList, setMovies] = useState<ApiMovie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<ApiMovie | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    MoviesApiService.getAll().then((apiData) => {
      setMovies(apiData);
      setIsLoading(false);
    });
  }, []);
  const addMovie = async (newMovie: ApiMovie) => {
    setIsLoading(true);
    await MoviesApiService.add(newMovie);
    const newMovies = await MoviesApiService.getAll();
    setMovies(newMovies);
    setIsLoading(false);
  };
  const modifyMovie = async (changedMovie: ApiMovie) => {
    setIsLoading(true);
    await MoviesApiService.modify(changedMovie);
    const newMovies = await MoviesApiService.getAll();
    setMovies(newMovies);
    setIsLoading(false);
  };
  const deleteMovie = async (deletedMovie: ApiMovie) => {
    setIsLoading(true);
    await MoviesApiService.delete(deletedMovie);
    const newMovies = await MoviesApiService.getAll();
    setMovies(newMovies);
    setIsLoading(false);
  };

  return (
    <moviesApiContext.Provider
      value={{
        moviesList,
        selectedMovie,
        setSelectedMovie,
        addMovie,
        isLoading,
        modifyMovie,
        deleteMovie,
      }}
    >
      {children}
    </moviesApiContext.Provider>
  );
};