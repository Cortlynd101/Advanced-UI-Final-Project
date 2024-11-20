import { useParams } from "react-router-dom";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import { useTicketsApiContext } from "../api-context/useTicketsApiContext";
import Loading from "./Loading";

function PurchaseTickets() {
  const { selectedMovie } = useMoviesApiContext(); // isLoading
  const isLoading = false;
  const { ticketsList, selectedTicket, setSelectedTicket } =
    useTicketsApiContext();
  const { Id } = useParams();

  console.log("Selected movie id: ", selectedMovie?.id);
  return (
    <>
      <div className="main">
        <h1>Tickets for {selectedMovie?.name}: </h1>
        <div>
          {isLoading && <Loading />}
          {!isLoading && (
            <div>
              {ticketsList.map((ticket) => (
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
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PurchaseTickets;