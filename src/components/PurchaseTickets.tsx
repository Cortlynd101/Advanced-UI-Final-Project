import { useState } from "react";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import { useUsersApiContext } from "../api-context/useUsersApiContext";
import { ApiTicket, useTicketsApiContext } from "../api-context/useTicketsApiContext";
import React from "react";
import Toastify from "toastify-js";
import { useMediaQuery } from "react-responsive";

const PurchaseTickets: React.FC = () => {
  const { selectedMovie } = useMoviesApiContext(); // isLoading
  const { ticketsList } = useTicketsApiContext();
  const { usersList, modifyUser } = useUsersApiContext();
  const [ticketsToBePurchased, setTicketsToBePurchased] = useState<ApiTicket[]>([]);

  const selectTicket = (ticket: ApiTicket) => {
    const element = document.getElementById(ticket.id.toString());
    if ((element as HTMLDivElement).style.background == "gray") {
      setTicketsToBePurchased((oldTickets) => [...oldTickets, ticket]);
      (element as HTMLDivElement).style.background = "#bb1705"
    } else {
      setTicketsToBePurchased((oldTickets) =>
        oldTickets.filter((ticket) => ticket.id !== ticket.id)
      );
      (element as HTMLDivElement).style.background = "gray"
    }
  };

  const purchaseTickets = async () => {
    try {
      for (const ticket of ticketsToBePurchased) {
        console.log("Purchasing Ticket ID: ", ticket.id);
        await purchaseTicket(ticket);
      }
      setTicketsToBePurchased([]);
  
      Toastify({
        text: "Tickets purchased successfully! They have been added to your inventory.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "hsl(139, 75%, 24%)",
      }).showToast();
    } catch (error) {
      console.error("Error purchasing tickets: ", error);
      Toastify({
        text: "Error purchasing tickets. Please try again.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "hsl(0, 75%, 50%)",
      }).showToast();
    }
  };

  const purchaseTicket = async (ticket: ApiTicket) => {
    const modifiedUser = usersList[0];
    ticket.redeemed = true;
    modifiedUser.user_tickets?.push(ticket);
    await modifyUser(modifiedUser)
    localStorage.setItem("puchasedTicketId" + ticket.id.toString(), ticket.id.toString());
    setTicketsToBePurchased([]);
  };
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      {!isMobile ? (
        <div className="main">
          <h3>Tickets for {selectedMovie?.name}: </h3>
          <div className="row">
            {ticketsList.map((ticket) => (
              <React.Fragment key={ticket.id}>
                {ticket.movie_id == Number(selectedMovie?.id) &&
                  ticket.id - 20 * ticket.movie_id <= 4 && (
                    <div className="col" style={{ padding: "10px" }}>
                      <button
                        id={ticket.id.toString()}
                        style={{ background: "gray" }}
                        disabled={ticket.redeemed}
                        className="btn btn-primary"
                        onClick={() => selectTicket(ticket)}
                      >
                        Ticket ID: {ticket.id}
                      </button>
                    </div>
                  )}
              </React.Fragment>
            ))}
          </div>
          <div className="row">
            {ticketsList.map((ticket) => (
              <React.Fragment key={ticket.id}>
                {ticket.movie_id == Number(selectedMovie?.id) &&
                  ticket.id - 20 * ticket.movie_id <= 9 &&
                  ticket.id - 20 * ticket.movie_id > 4 && (
                    <div className="col" style={{ padding: "10px" }}>
                      <button
                        id={ticket.id.toString()}
                        style={{ background: "gray" }}
                        disabled={ticket.redeemed}
                        className="btn btn-primary"
                        onClick={() => selectTicket(ticket)}
                      >
                        Ticket ID: {ticket.id}
                      </button>
                    </div>
                  )}
              </React.Fragment>
            ))}
          </div>
          <div className="row">
            {ticketsList.map((ticket) => (
              <React.Fragment key={ticket.id}>
                {ticket.movie_id == Number(selectedMovie?.id) &&
                  ticket.id - 20 * ticket.movie_id <= 14 &&
                  ticket.id - 20 * ticket.movie_id > 9 && (
                    <div className="col" style={{ padding: "10px" }}>
                      <button
                        id={ticket.id.toString()}
                        style={{ background: "gray" }}
                        disabled={ticket.redeemed}
                        className="btn btn-primary"
                        onClick={() => selectTicket(ticket)}
                      >
                        Ticket ID: {ticket.id}
                      </button>
                    </div>
                  )}
              </React.Fragment>
            ))}
          </div>
          <div className="row">
            {ticketsList.map((ticket) => (
              <React.Fragment key={ticket.id}>
                {ticket.movie_id == Number(selectedMovie?.id) &&
                  ticket.id - 20 * ticket.movie_id <= 19 &&
                  ticket.id - 20 * ticket.movie_id > 14 && (
                    <div className="col" style={{ padding: "10px" }}>
                      <button
                        id={ticket.id.toString()}
                        style={{ background: "gray" }}
                        disabled={ticket.redeemed}
                        className="btn btn-primary"
                        onClick={() => selectTicket(ticket)}
                      >
                        Ticket ID: {ticket.id}
                      </button>
                    </div>
                  )}
              </React.Fragment>
            ))}
          </div>
          <div className="row">
            <div className="col">
              <button
                onClick={() => purchaseTickets()}
                className="btn btn-primary"
              >
                Purchase Selected Tickets
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="main">
          <h3>Tickets for {selectedMovie?.name}: </h3>
          <div className="col">
            {ticketsList.map((ticket) => (
              <React.Fragment key={ticket.id}>
                {ticket.movie_id == Number(selectedMovie?.id) && (
                    <div className="col" style={{ padding: "10px" }}>
                      <button
                        id={ticket.id.toString()}
                        style={{ background: "gray" }}
                        disabled={ticket.redeemed}
                        className="btn btn-primary"
                        onClick={() => selectTicket(ticket)}
                      >
                        Ticket ID: {ticket.id}
                      </button>
                    </div>
                  )}
              </React.Fragment>
            ))}
          </div>
         
          <div className="row">
            <div className="col">
              <button
                onClick={() => purchaseTickets()}
                className="btn btn-primary"
              >
                Purchase Selected Tickets
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PurchaseTickets;