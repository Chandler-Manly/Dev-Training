import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/algorithm/">ALGORITHM GALLERY</Link>
      </ul>
      <ul>
        <Link to="/form">NEW POST</Link>
      </ul>
      <ul>
        <Link to="/resources">FORUM</Link>
      </ul>
    </nav>
  );
}
export default Nav;
