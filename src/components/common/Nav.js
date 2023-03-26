import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <NavLink to="/">Northwest Animal Hospital</NavLink>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <NavLink to="/staff">All Staff</NavLink>
          </li>
          <li>
            <NavLink to="/pets">All Pets</NavLink>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
