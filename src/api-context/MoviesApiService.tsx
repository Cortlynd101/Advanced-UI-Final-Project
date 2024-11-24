import axios from "axios";
import { ApiMovie } from "./useMoviesApiContext";
const baseUrl = import.meta.env.VITE_API_URL;

if (!baseUrl) console.log("VITE_API_URL is not set");
else console.log("VITE_API_URL is: " + { baseUrl });

export const MoviesApiService = {
  getAll: async () => {
    const response = await fetch(`${baseUrl}`);
    const data: ApiMovie[] = await response.json();
    return data;
  },
  add: async (newMovie: ApiMovie) => {
    await fetch(`${baseUrl}add-movie`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await axios.post(`${baseUrl}`, newMovie);
  },
  modify: async (modifiedMovie: ApiMovie) => {
    // await fetch(`${baseUrl}modify-movie/` + `${modifiedMovie.id}`, {
    //   method: "POST",
    //   body: JSON.stringify(modifiedMovie),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    await axios.put(
      `${baseUrl}modify-movie/` + `${modifiedMovie.id}`,
      modifiedMovie
    );
  },
  delete: async (deletedMovie: ApiMovie) => {
    await axios.delete(`${baseUrl}delete-movie/` + `${deletedMovie.id}`);
  },
};