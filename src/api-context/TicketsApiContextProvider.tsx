import { FC, ReactNode, useEffect, useState } from "react";
import { TicketsApiService } from "./TicketsApiService";
import { ApiTicket, ticketsApiContext } from "./useTicketsApiContext";

export const TicketsApiContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [ticketsList, setTickets] = useState<ApiTicket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<ApiTicket | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    TicketsApiService.getAll().then((apiData) => {
      setTickets(apiData);
      setIsLoading(false);
    });
  }, []);
  const addTicket = async (newTicket: ApiTicket) => {
    setIsLoading(true);
    await TicketsApiService.add(newTicket);
    const newTickets = await TicketsApiService.getAll();
    setTickets(newTickets);
    setIsLoading(false);
  };
  const modifyTicket = async (changedTicket: ApiTicket) => {
    setIsLoading(true);
    await TicketsApiService.modify(changedTicket);
    const newTickets = await TicketsApiService.getAll();
    setTickets(newTickets);
    setIsLoading(false);
  };
  const deleteTicket = async (deletedTicket: ApiTicket) => {
    setIsLoading(true);
    await TicketsApiService.delete(deletedTicket);
    const newTickets = await TicketsApiService.getAll();
    setTickets(newTickets);
    setIsLoading(false);
  };

  return (
    <ticketsApiContext.Provider
      value={{
        ticketsList,
        selectedTicket,
        setSelectedTicket,
        addTicket,
        isLoading,
        modifyTicket,
        deleteTicket,
      }}
    >
      {children}
    </ticketsApiContext.Provider>
  );
};