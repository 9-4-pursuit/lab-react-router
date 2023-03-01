import { NavLink } from "react-router-dom";


import "./PetsListNav.css";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <NavLink to="/pets/cats">See All Cats ({cats.length})</NavLink>
        </li>
        <li>
          <NavLink to="/pets/dogs">See All Dogs ({dogs.length})</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
