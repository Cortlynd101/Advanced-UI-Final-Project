import { useMoviesApiContext } from "../api-context/useMoviesApiContext";
import { useTicketsApiContext } from "../api-context/useTicketsApiContext";

function TicketQRCode() {
  const { selectedTicket } = useTicketsApiContext();
  const { moviesList } = useMoviesApiContext();
    return (
      <>
        <div className="main">
          <h3>Ticket QR Code: </h3>
          <div className="row">
            <h5>
              <div className="col">
                QR Code for ticket id number: {selectedTicket?.id.toString()} for{" "}
                {moviesList[selectedTicket?.movie_id ?? 0].name.toString()}
                <img src="/qrcode.png" style={{maxHeight: "150px"}}/>
              </div>
            </h5>
          </div>
        </div>
      </>
    );
  }
  
  export default TicketQRCode;