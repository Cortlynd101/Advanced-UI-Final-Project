import { NavLink } from "react-router-dom";
import {
  HouseFill,
  PlusCircleFill,
  CalendarWeekFill,
  BagFill
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
              <CalendarWeekFill className="mx-2" />
              <NavLink to={"upcoming-movies"}>View the upcoming movies</NavLink>
            </div>
            <div className="col">
              <BagFill className="mx-2" />
              <NavLink to={"gallery"}>
                View the gallery
              </NavLink>
            </div>
            <div className="col">
              <PlusCircleFill className="mx-2" />
              <NavLink to={"snacks"}>Purchase snacks</NavLink>
            </div>
            <div className="col">
              <BagFill className="mx-2" />
              <NavLink to={"ticket-inventory"}>
                View purchased tickets
              </NavLink>
            </div>
            <div className="col">
              <BagFill className="mx-2" />
              <NavLink to={"snack-inventory"}>
                View purchased snacks
              </NavLink>
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
              <CalendarWeekFill className="mx-2" />
              <NavLink to={"upcoming-movies"}>View the upcoming movies</NavLink>
            </div>
            <div className="col">
              <BagFill className="mx-2" />
              <NavLink to={"gallery"}>
                View the gallery
              </NavLink>
            </div>
            <div className="col">
              <PlusCircleFill className="mx-2" />
              <NavLink to={"snacks"}>Purchase snacks</NavLink>
            </div>
            <div className="col">
              <BagFill className="mx-2" />
              <NavLink to={"ticket-inventory"}>
                View purchased tickets
              </NavLink>
            </div>
            <div className="col">
              <BagFill className="mx-2" />
              <NavLink to={"snack-inventory"}>
                View purchased snacks
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;