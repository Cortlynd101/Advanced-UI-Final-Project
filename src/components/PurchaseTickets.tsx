import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import { useUsersApiContext } from "../api-context/useUsersApiContext";
import { ApiTicket, useTicketsApiContext } from "../api-context/useTicketsApiContext";
import Toastify from "toastify-js";

function PurchaseTickets() {
  const { selectedMovie } = useMoviesApiContext(); // isLoading
  const { ticketsList, setSelectedTicket } = useTicketsApiContext();
  const { usersList, modifyUser } = useUsersApiContext();

  const purchaseTicket = (ticket: ApiTicket) => {
    console.log("Purchasing ticket.");
    const modifiedUser = usersList[0];
    ticket.redeemed = true;
    modifiedUser.user_tickets?.push(ticket);
    modifyUser(modifiedUser)
    Toastify({
      text: "Ticket purchased!",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "hsl(139, 75%, 24%)",
    }).showToast();
  };
  return (
    <>
      <div className="main">
        <h3>Tickets for {selectedMovie?.name}: </h3>
        {/* <button
                className="btn btn-primary"
                onClick={() => purchaseTicket()}
              >
                Purchase ticket!
              </button> */}
        {ticketsList.map((ticket) => (
          <div
            key={ticket.id}
            style={{ cursor: "default" }}
            onClick={() => setSelectedTicket(ticket)}
          >
            {ticket.movie_id == Number(selectedMovie?.id) && (
              <div style={{padding: "10px"}}>
                <button
                  disabled={ticket.redeemed}
                  className="btn btn-primary"
                  onClick={() => purchaseTicket(ticket)}
                >
                  Purchase Ticket
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default PurchaseTickets;