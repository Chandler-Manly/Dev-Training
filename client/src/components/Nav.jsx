import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/resources"><div>Live-Feed</div></Link>
      <Link to="/quiz"><div>Quiz</div></Link>

   
    </nav>
  )
}
export default Nav