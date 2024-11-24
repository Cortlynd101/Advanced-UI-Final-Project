import { createContext, useContext } from "react";
import { ApiTicket } from "./useTicketsApiContext";
import { ApiSnack } from "./useSnacksApiContext";

export interface ApiUser {
    exp: number | undefined;
    sub: string | undefined;
    name: string | undefined;
    preferred_username: string | undefined;
    given_name: string | undefined;
    family_name: string | undefined;
    email: string | undefined;
    user_tickets : ApiTicket[] | undefined;
    user_snacks: ApiSnack[] | undefined;
}

export interface UsersApiContextInterface {
  usersList: ApiUser[];
  selectedUser: ApiUser | undefined;
  setSelectedUser: (user: ApiUser) => void;
  addUser: (user: ApiUser) => void;
  userTickets: ApiTicket[];
  isLoading: boolean;
  modifyUser: (changedUser: ApiUser) => void;
  deleteUser: (deletedUser: ApiUser) => void;
}

export const usersApiContext = createContext<UsersApiContextInterface>({
  usersList: [],
  selectedUser: undefined,
  setSelectedUser: () => {},
  addUser: () => {},
  userTickets: [],
  isLoading: false,
  modifyUser: () => {},
  deleteUser: () => {},
});

export const useUsersApiContext = () => useContext(usersApiContext);