import { NavLink } from "react-router-dom";
import {
  FileEarmarkFill,
  HouseFill,
  ClipboardDataFill,
  PlusSquareFill,
  PencilSquare,
} from "react-bootstrap-icons";
import { useMediaQuery } from "react-responsive";

function NavBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile ? (
        <div>
          <div className="row">
            <div className="col">
              <HouseFill className="mx-2" />
              <br></br>
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="col">
              <ClipboardDataFill className="mx-2" />
              <br></br>
              <NavLink to={"/details/" + 0}>
                {" "}
                Details for the default first game
              </NavLink>
            </div>
            <div className="col">
              <PlusSquareFill className="mx-2" />
              <br></br>
              <NavLink to="/AddGame">Page to add a game</NavLink>
            </div>
            <div className="col">
              <PencilSquare className="mx-2" />
              <br></br>
              <NavLink to={"/modify/" + 0}>Page to modify or delete a game</NavLink>
            </div>
            <div className="col">
              <FileEarmarkFill className="mx-2" />
              <br></br>
              <NavLink to={"/image-page/"}>Page to view game images</NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col">
              <HouseFill className="mx-2" />
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="col">
              <ClipboardDataFill className="mx-2" />
              <NavLink to={"details/" + 0}>Details for the default first game</NavLink>
            </div>
            <div className="col">
              <PlusSquareFill className="mx-2" />
              <NavLink to="AddGame">Page to add a game</NavLink>
            </div>
            <div className="col">
              <PencilSquare className="mx-2" />
              <NavLink to={"modify/" + 0}>Page to modify or delete a game</NavLink>
            </div>
            <div className="col">
              <FileEarmarkFill className="mx-2" />
              <NavLink to={"image-page/"}>Page to view game images</NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;