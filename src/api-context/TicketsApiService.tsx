import axios from "axios";
import { ApiTicket } from "./useTicketsApiContext";
const baseUrl = import.meta.env.VITE_API_URL;

if (!baseUrl) console.log("VITE_API_URL is not set");
else console.log("VITE_API_URL is: " + { baseUrl });

export const TicketsApiService = {
  getAll: async () => {
    const response = await fetch(`${baseUrl}get-tickets`);
    const data: ApiTicket[] = await response.json();
    return data;
  },
  add: async (newTicket: ApiTicket) => {
    await fetch(`${baseUrl}add-ticket`, {
      method: "POST",
      body: JSON.stringify(newTicket),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await axios.post(`${baseUrl}`, newTicket);
  },
  modify: async (modifiedTicket: ApiTicket) => {
    // await fetch(`${baseUrl}modify-ticket/` + `${modifiedTicket.id}`, {
    //   method: "POST",
    //   body: JSON.stringify(modifiedTicket),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    await axios.put(
      `${baseUrl}modify-ticket/` + `${modifiedTicket.id}`,
      modifiedTicket
    );
  },
  delete: async (deletedTicket: ApiTicket) => {
    await axios.delete(`${baseUrl}delete-ticket/` + `${deletedTicket.id}`);
  },
};