import { createContext, useContext } from "react";

export interface ApiTicket {
  id: number;
  movie_id: number;
  redeemed: boolean;
}

export interface TicketsApiContextInterface {
  ticketsList: ApiTicket[];
  selectedTicket: ApiTicket | undefined;
  setSelectedTicket: (item: ApiTicket) => void;
  addTicket: (item: ApiTicket) => void;
  isLoading: boolean;
  modifyTicket: (changedTicket: ApiTicket) => void;
  deleteTicket: (deletedTicket: ApiTicket) => void;
}

export const ticketsApiContext = createContext<TicketsApiContextInterface>({
  ticketsList: [],
  selectedTicket: undefined,
  setSelectedTicket: () => {},
  addTicket: () => {},
  isLoading: false,
  modifyTicket: () => {},
  deleteTicket: () => {},
});

export const useTicketsApiContext = () => useContext(ticketsApiContext);