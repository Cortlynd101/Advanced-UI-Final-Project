import { useSnacksApiContext } from "../api-context/useSnacksApiContext";

function Snacks() {
  const { snacksList, setSelectedSnack } = useSnacksApiContext();
  return (
    <>
      <div className="main">
        <h1>Purchase snacks: </h1>
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
                  className=""
                  key={snack.id}
                  style={{ cursor: "default" }}
                  onClick={() => setSelectedSnack(snack)}
                >
                  <div>
                    <button>Purchase</button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Snacks;