
import "./Nav.css";
import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <header>
      <article>
        <h1>
          <NavLink to="/">
            Northwest <span>Animal Hospital</span>
          </NavLink>
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