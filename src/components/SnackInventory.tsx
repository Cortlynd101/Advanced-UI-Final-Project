import { useNavigate } from "react-router-dom";
import { useSnacksApiContext } from "../api-context/useSnacksApiContext";
import { useUsersApiContext } from "../api-context/useUsersApiContext";

function SnackInventory() {
  const { snacksList, setSelectedSnack } = useSnacksApiContext();
  const { usersList } = useUsersApiContext();
  const snacks = usersList[0].user_snacks;

  const navigate = useNavigate();
  const viewQRCode = (snackId: number) => {
    const movie = snacksList.find(s => s.id === snackId);
    if (movie) {
      setSelectedSnack(movie);
      navigate("/snack-qr-code");
    }
  };
    return (
      <>
        <div className="main">
          <h3>Purchased snacks: </h3>
          <div className="row">
            {snacks?.map((snack) => (
              <div
                className=""
                key={snack.name}
                style={{ cursor: "default" }}
                onClick={() => setSelectedSnack(snack)}
              >
                <h5>
                  <div className="col">
                    {snack.name}
                    <button
                      className="btn btn-primary"
                      onClick={() => viewQRCode(snack.id)}
                      style={{margin: "10px"}}
                    >
                      View Snack QR Code
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
  
  export default SnackInventory;