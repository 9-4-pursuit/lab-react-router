import "./Nav.css";
import { NavLink } from "react-router-dom";


//since this is the Nav bar we change links to NavLinks. NavLinks have more component props, including whether or not they are active.

function Nav() {
  return (
  <nav>
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
            {/* <a href="/staff">All Staff</a> */}
            <NavLink to="/staff" >
              <li>All Staff</li>
            </NavLink>


            {/* <a href="/pets">All Pets</a> */}
            <NavLink to="/pets">
              <li>All Pets</li>
            </NavLink>

        </ul>
      </aside>

    </header>
    </nav>
  );
}

export default Nav;
