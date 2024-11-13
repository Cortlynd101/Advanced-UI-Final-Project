import "../App.css";
import "toastify-js/src/toastify.css";
import Toastify from 'toastify-js';

function Toast() {
  const successToast = () => {
    Toastify({
      text: "This has been a great success.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "hsl(139, 75%, 24%)",
    }).showToast();
  };

  const failureToast = () => {
    Toastify({
      text: "Darn that sucked. We failed.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "#b80404",
    }).showToast();
  };

  const warningToast = () => {
    Toastify({
      text: "This is your final warning.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "#f3f72c",
      style: {
        color: "#000000",
      },
    }).showToast();
  };

  const createFiftyToasts = () => {
    for (let i = 0; i < 50; i++) {
      Toastify({
        text: "Fifty of these?! Number: " + (i + 1),
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "#429feb",
      }).showToast();
    }

    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
  };

  return (
    <>
      <div className="main">
        <div className="row">
          <h1>These are my toasts: </h1>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-success" onClick={successToast}>
              Show Success Toast
            </button>
          </div>
          <div className="col">
            <button className="btn btn-danger" onClick={failureToast}>
              Show Failure Toast
            </button>
          </div>
          <div className="col">
            <button className="btn btn-warning" onClick={warningToast}>
              Show Warning Toast
            </button>
          </div>
          <div className="col">
            <button className="btn2 btn-info" onClick={createFiftyToasts}>
              Create Fifty Toasts
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toast;