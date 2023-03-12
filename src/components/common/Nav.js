import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
  <nav>
    <header>
      
      <article>
        <h1>
          <a href="/">
            Northwest <span>Animal Hospital</span>
          </a>
        </h1>
      </article>
      <aside>
        <ul>
            <a href="/staff">All Staff</a>
            {/* <NavLink to="/staff">
              <li>All Staff</li>
            </NavLink> */}

            <a href="/pets">All Pets</a>
            {/* <NavLink to="/pets">
              <li>All Pets</li>
            </NavLink> */}

        </ul>
      </aside>

    </header>
    </nav>
  );
}

export default Nav;
