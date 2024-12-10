import { useSnacksApiContext } from "../api-context/useSnacksApiContext";

function SnackQRCode() {
  const { selectedSnack } = useSnacksApiContext();
    return (
      <>
        <div className="main">
          <h3>Snack QR Code: </h3>
          <div className="row">
            <h5>
              <div className="col">
                QR Code for {selectedSnack?.name}
                <img src="/qrcode.png" style={{maxHeight: "150px"}}/>
              </div>
            </h5>
          </div>
        </div>
      </>
    );
  }
  
  export default SnackQRCode;