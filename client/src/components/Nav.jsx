import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/form">What's one thing you've learned?</Link>
      <Link to="/algorithm">Algorithm Gallery</Link>
      <Link to="/resources">Forum</Link>
      <Link to="/quiz">Quiz</Link>
    </nav>
  );
}
export default Nav;
