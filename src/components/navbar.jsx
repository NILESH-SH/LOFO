import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <nav className=" shadow-md flex justify-between items-center text-xl font-display mb-2">
        <div className="p-4 flex items-center gap-3">
          <img
            src="https://www.ncuindia.edu/wp-content/uploads/2023/01/logo-ncu-home.png"
            alt="Error"
            className="max-w-12 "
          />
          <NavLink to={"/lost"} className="text-2xl">
            LOFO
          </NavLink>
        </div>
        <ul className="flex items-center gap-5 ">
          <li>
            <NavLink to={"/"} className="hover:text-primary hover:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/lost-items"}
              className="hover:text-primary hover:underline"
            >
              Lost Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/found-items"}
              className="hover:text-primary hover:underline"
            >
              Found Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/report"}
              className="hover:text-primary hover:underline"
            >
              Report
            </NavLink>
          </li>
        </ul>

        <button className="flex items-center gap-2 text-white bg-primary rounded-2xl px-2 py-1  mr-2 hover:opacity-80">
          <FaUserAlt /> ABCD
        </button>
      </nav>
    </>
  );
}
