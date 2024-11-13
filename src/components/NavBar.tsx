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
                Details for the default first movie
              </NavLink>
            </div>
            <div className="col">
              <FileEarmarkFill className="mx-2" />
              <NavLink to={"upcoming-movies"}>View the upcoming movies</NavLink>
            </div>
            {/* <div className="col">
              <PlusSquareFill className="mx-2" />
              <br></br>
              <NavLink to="/AddMovie">Page to add a movie</NavLink>
            </div>
            <div className="col">
              <PencilSquare className="mx-2" />
              <br></br>
              <NavLink to={"/modify/" + 0}>Page to modify or delete a movie</NavLink>
            </div>
            <div className="col">
              <FileEarmarkFill className="mx-2" />
              <br></br>
              <NavLink to={"/image-page/"}>Page to view movie images</NavLink>
            </div> */}
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
              <NavLink to={"details/" + 0}>Details for the default first movie</NavLink>
            </div>
            <div className="col">
              <FileEarmarkFill className="mx-2" />
              <NavLink to={"upcoming-movies"}>View the upcoming movies</NavLink>
            </div>
            {/* <div className="col">
              <PlusSquareFill className="mx-2" />
              <NavLink to="AddMovie">Page to add a movie</NavLink>
            </div>
            <div className="col">
              <PencilSquare className="mx-2" />
              <NavLink to={"modify/" + 0}>Page to modify or delete a movie</NavLink>
            </div>
            <div className="col">
              <FileEarmarkFill className="mx-2" />
              <NavLink to={"image-page/"}>Page to view movie images</NavLink>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;