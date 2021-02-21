import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
      <Link to="/">HOME</Link></ul>
      <ul><Link to="/form">POST</Link></ul>
      <ul><Link to="/algorithm">ALGORITHM GALLERY</Link></ul>
      <ul><Link to="/resources">FORUM</Link></ul>
      <ul><Link to="/quiz">QUIZ</Link></ul>
    </nav>
  );
}
export default Nav;
