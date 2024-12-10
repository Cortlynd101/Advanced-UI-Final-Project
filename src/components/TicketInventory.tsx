import { useNavigate } from "react-router-dom";
import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import { useTicketsApiContext } from "../api-context/useTicketsApiContext";
import { useUsersApiContext } from "../api-context/useUsersApiContext";

function TicketInventory() {
  const { setSelectedTicket } = useTicketsApiContext();
  const { usersList } = useUsersApiContext();
  const { moviesList, setSelectedMovie } = useMoviesApiContext();
  const tickets = usersList[0].user_tickets;

  const navigate = useNavigate();
  const viewQRCode = (movieId: number) => {
    const movie = moviesList.find(m => m.id === movieId);
    if (movie) {
      setSelectedMovie(movie);
      navigate("/ticket-qr-code");
    }
  };
    return (
      <>
        <div className="main">
          <h3>Purchased tickets: </h3>
          <div className="row">
            {tickets?.map((ticket) => (
              <div
                className=""
                key={ticket.id}
                style={{ cursor: "default" }}
                onClick={() => setSelectedTicket(ticket)}
              >
                <h5>
                  <div className="col">
                    Ticket id number: {ticket.id.toString()} for{" "}
                    {moviesList[ticket.movie_id].name.toString()}
                    <button
                      className="btn btn-primary"
                      onClick={() => viewQRCode(ticket.movie_id)}
                      style={{margin: "10px"}}
                    >
                      View Ticket QR Code
                    </button>
                  </div>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default TicketInventory;