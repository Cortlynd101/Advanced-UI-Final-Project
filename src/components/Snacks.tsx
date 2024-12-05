import Toastify from "toastify-js";
import { ApiSnack, useSnacksApiContext } from "../api-context/useSnacksApiContext";
import { useUsersApiContext } from "../api-context/useUsersApiContext";

function Snacks() {
  const { snacksList, setSelectedSnack } = useSnacksApiContext();
  const { usersList, modifyUser } = useUsersApiContext();
  
  const purchaseSnack = (snack: ApiSnack) => {
    console.log("Purchasing snack. It has been added to your inventory.");
    const modifiedUser = usersList[0];
    modifiedUser.user_snacks?.push(snack);
    modifyUser(modifiedUser)
    Toastify({
      text: "Snack purchased!",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "hsl(139, 75%, 24%)",
    }).showToast();
  };

  const grid: React.CSSProperties = {
    display: "grid",
  };
  return (
    <>
      <div className="main">
        <h3>Purchase snacks: </h3>
        <div style={grid}>
          <table style={{ textAlign: "center" }}>
            <tbody>
              {snacksList.map((snack) => (
                <tr>
                  <th className="" key={snack.name}>
                    <div>{snack.name}</div>
                  </th>
                  <th className="" key={snack.price}>
                    <div>{snack.price}</div>
                  </th>
                  <th
                    key={snack.id}
                    style={{ cursor: "default" }}
                    onClick={() => setSelectedSnack(snack)}
                  >
                    <div>
                      <button className="btn btn-primary" onClick={() => purchaseSnack(snack)}>Purchase</button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Snacks;