import axios from "axios";
import { ApiUser } from "./useUsersApiContext";
import { ApiTicket } from "./useTicketsApiContext";
const baseUrl = import.meta.env.VITE_API_URL;

if (!baseUrl) console.log("VITE_API_URL is not set");
else console.log("VITE_API_URL is: " + { baseUrl });

export const UsersApiService = {
  getAll: async () => {
    const response = await fetch(`${baseUrl}get-users`);
    const data: ApiUser[] = await response.json();
    return data;
  },
  getUserTickets: async (id: number) => {
    const response = await fetch(`${baseUrl}get-user-tickets`);
    await axios.post(`${baseUrl}`, id);
    const data: ApiTicket[] = await response.json();
    return data;
  },
  add: async (newUser: ApiUser) => {
    await fetch(`${baseUrl}add-user`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await axios.post(`${baseUrl}`, newUser);
  },
  addTicket: async (newTicket: ApiTicket, user: ApiUser) => {
    const userAndTicket = { newTicket, user };
    await fetch(`${baseUrl}add-user-ticket`, {
      method: "POST",
      body: JSON.stringify(userAndTicket),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    await axios.post(`${baseUrl}`, userAndTicket);
  },
  modify: async (modifiedUser: ApiUser) => {
    // await fetch(`${baseUrl}modify-user/` + `${modifiedUser.exp}`, {
    //   method: "POST",
    //   body: JSON.stringify(modifiedUser),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    await axios.put(
      `${baseUrl}modify-user/` + `${modifiedUser.exp}`,
      modifiedUser
    );
  },
  delete: async (deletedUser: ApiUser) => {
    await axios.delete(`${baseUrl}delete-user/` + `${deletedUser.exp}`);
  },
};