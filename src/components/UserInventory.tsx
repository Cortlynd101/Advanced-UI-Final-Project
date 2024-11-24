import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import { useSnacksApiContext } from "../api-context/useSnacksApiContext";
import { useTicketsApiContext } from "../api-context/useTicketsApiContext";
import { useUsersApiContext } from "../api-context/useUsersApiContext";

function UserInventory() {
  const { selectedMovie } = useMoviesApiContext();
  const { setSelectedTicket } = useTicketsApiContext();
  const { setSelectedSnack } = useSnacksApiContext();
  const { usersList } = useUsersApiContext();
  const tickets = usersList[0].user_tickets;
  const snacks = usersList[0].user_snacks;
    return (
      <>
        <div className="main">
          <h1>Purchased tickets: </h1>
          <div>
            {tickets?.map((ticket) => (
              <div
                className=""
                key={ticket.id}
                style={{ cursor: "default" }}
                onClick={() => setSelectedTicket(ticket)}
              >
                <h2>
                  <div>
                    {selectedMovie?.id == ticket.id ? "✓ " : ""}
                    {ticket.redeemed}
                  </div>
                </h2>
              </div>
            ))}
          </div>
          <h1>Purchased snacks: </h1>
          <div>
            {snacks?.map((snack) => (
              <div
                className=""
                key={snack.name}
                style={{ cursor: "default" }}
                onClick={() => setSelectedSnack(snack)}
              >
                <h2>
                  <div>
                    {selectedMovie?.id == snack.id ? "✓ " : ""}
                    {snack.name}
                  </div>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default UserInventory;