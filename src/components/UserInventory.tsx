import { useSnacksApiContext } from "../api-context/useSnacksApiContext";
import { useTicketsApiContext } from "../api-context/useTicketsApiContext";
import { useUsersApiContext } from "../api-context/useUsersApiContext";

function UserInventory() {
  const { selectedTicket, setSelectedTicket } = useTicketsApiContext();
  const { selectedSnack, setSelectedSnack } = useSnacksApiContext();
  const { usersList } = useUsersApiContext();
  const tickets = usersList[0].user_tickets;
  const snacks = usersList[0].user_snacks;
    return (
      <>
        <div className="main">
          <h3>Purchased tickets: </h3>
          <div>
            {tickets?.map((ticket) => (
              <div
                className=""
                key={ticket.id}
                style={{ cursor: "default" }}
                onClick={() => setSelectedTicket(ticket)}
              >
                <h5>
                  <div>
                    {selectedTicket?.id == ticket.id ? "✓ " : ""}
                    Ticket id number: {ticket.id.toString()}
                  </div>
                </h5>
              </div>
            ))}
          </div>
          <h3>Purchased snacks: </h3>
          <div>
            {snacks?.map((snack) => (
              <div
                className=""
                key={snack.name}
                style={{ cursor: "default" }}
                onClick={() => setSelectedSnack(snack)}
              >
                <h5>
                  <div>
                    {selectedSnack?.id == snack.id ? "✓ " : ""}
                    {snack.name}
                  </div>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default UserInventory;