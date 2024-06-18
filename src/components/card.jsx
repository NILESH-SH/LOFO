import { NavLink } from "react-router-dom";
export default function Card({ heading, img, link }) {
  return (
    <div className="flex justify-center items-center max-w-28 bg-red-300 opacity-50 rounded-3xl p-5 z-0">
      <NavLink to={link}>
        <h2 className="z-10">{heading}</h2>
        <img src={img} alt="error" className="z-9"/>
      </NavLink>
    </div>
  );
}
