import "./Nav.css";
// import link
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";



function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
          Northwest <span>Animal Hospital</span>
          </Link>
          {/* change a tags to use Link */}
          {/* <a href="/"> */}
            {/* Northwest <span>Animal Hospital</span> */}
          {/* </a> */}
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link  to="/staff">
            All Staff
            </Link>
            {/* <a href="/staff">All Staff</a> */}
          </li>
          <li>
            {/* <a href="/pets">All Pets</a> */}
            <Link to="/pets">
            All Pets
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
