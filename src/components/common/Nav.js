import "./Nav.css";
import { Link } from "react-router-dom";


function Nav() {

  return (
    <header>
      
        <article>
        <h1><Link to='/'>Northwest <span>Animal Hospital</span></Link></h1>
        {/* <h1>
          <a href="/">
            Northwest <span>Animal Hospital</span>
          </a>
        </h1> */}
      </article>
      
      <aside>
        <ul>
          <li>
            {/* <a href="/staff">All Staff</a> */}
            <Link to='/staff'>All Staff</Link>
          </li>
          <li>
            {/* <a href="/pets">All Pets</a> */}
            <Link to='/pets'>All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
