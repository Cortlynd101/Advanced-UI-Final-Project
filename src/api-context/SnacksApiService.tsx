import axios from "axios";
import { ApiSnack } from "./useSnacksApiContext";
const baseUrl = import.meta.env.VITE_API_URL;

if (!baseUrl) console.log("VITE_API_URL is not set");
else console.log("VITE_API_URL is: " + { baseUrl });

export const SnacksApiService = {
  getAll: async () => {
    const response = await fetch(`${baseUrl}get-snacks`);
    const data: ApiSnack[] = await response.json();
    return data;
  },
  add: async (newSnack: ApiSnack) => {
    await fetch(`${baseUrl}add-snack`, {
      method: "POST",
      body: JSON.stringify(newSnack),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await axios.post(`${baseUrl}`, newSnack);
  },
  modify: async (modifiedSnack: ApiSnack) => {
    await fetch(`${baseUrl}modify-snack/` + `${modifiedSnack.id}`, {
      method: "POST",
      body: JSON.stringify(modifiedSnack),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await axios.put(
      `${baseUrl}modify-snack/` + `${modifiedSnack.id}`,
      modifiedSnack
    );
  },
  delete: async (deletedSnack: ApiSnack) => {
    await axios.delete(`${baseUrl}delete-snack/` + `${deletedSnack.id}`);
  },
};