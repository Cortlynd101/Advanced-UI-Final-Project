import axios from "axios";
import { ApiGame } from "./useGamesApiContext";
const baseUrl = import.meta.env.VITE_API_URL;

if (!baseUrl) console.log("VITE_API_URL is not set");
else console.log("VITE_API_URL is: " + { baseUrl });

export const GamesApiService = {
  getAll: async () => {
    const response = await fetch(`${baseUrl}`);
    const data: ApiGame[] = await response.json();
    return data;
  },
  add: async (newGame: ApiGame) => {
    await fetch(`${baseUrl}add-game`, {
      method: "POST",
      body: JSON.stringify(newGame),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await axios.post(`${baseUrl}`, newGame);
  },
  modify: async (modifiedGame: ApiGame) => {
    await fetch(`${baseUrl}modify-game/` + `${modifiedGame.id}`, {
      method: "POST",
      body: JSON.stringify(modifiedGame),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await axios.put(
      `${baseUrl}modify-game/` + `${modifiedGame.id}`,
      modifiedGame
    );
  },
  delete: async (deletedGame: ApiGame) => {
    await axios.delete(`${baseUrl}delete-game/` + `${deletedGame.id}`);
  },
};