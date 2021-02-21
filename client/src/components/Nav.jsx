import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/form">What's one thing you've learned?</Link>
      <Link to="/algorithm">Algorithm Gallery</Link>
      <Link to="/resources">Forum</Link>
        <Link to="/quiz">Quiz</Link>
        </div>
    </nav>
  );
}
export default Nav;
