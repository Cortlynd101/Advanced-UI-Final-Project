import { useParams } from "react-router-dom";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import Loading from "./Loading";
import { useUsersApiContext } from "../api-context/useUsersApiContext";
import { useTicketsApiContext } from "../api-context/useTicketsApiContext";

function PurchaseTickets() {
  const { selectedMovie } = useMoviesApiContext(); // isLoading
  const isLoading = false;
  const { ticketsList } = useTicketsApiContext();
  const { usersList, modifyUser } = useUsersApiContext();
  const { Id } = useParams();

  console.log("Selected movie id: ", selectedMovie?.id);
  console.log("Parameter ID: ", Id);

  const purchaseTicket = () => {
    console.log("Purchasing ticket.");
    const modifiedUser = usersList[0];
    modifiedUser.user_tickets?.push(ticketsList[0]);
    modifyUser(modifiedUser)
  };
  return (
    <>
      <div className="main">
        <h1>Tickets for {selectedMovie?.name}: </h1>
        <div>
          {isLoading && <Loading />}
          {!isLoading && (
            <div>
              <button onClick={() => purchaseTicket()}>
                Purchase ticket!
              </button>
              {/* {ticketsList.map((ticket) => (
                <div
                  className=""
                  key={ticket.id}
                  style={{ cursor: "default" }}
                  onClick={() => setSelectedTicket(ticket)}
                >
                  <h2>
                    {ticket.movie_id == Number(Id) && (
                      <div>
                        {selectedTicket?.id == ticket.id ? "✓ " : ""}
                        {ticket.id}
                      </div>
                    )}
                  </h2>
                </div>
              ))} */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PurchaseTickets;