import { Link } from "react-router-dom";
import Header from "./Header";

function Nav() {
  return (
    <nav>
      <Header className="logo" />
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/search">Search</Link>

      <Link to="/resources"><div>Resources</div></Link>
      <Link to="/quiz"><div>START THE DEVELOPER QUIZ:<br></br> DISCOVER YOUR POTENTIAL.</div></Link>

   
    </nav>
  )
}
export default Nav