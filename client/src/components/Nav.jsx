import { Link } from "react-router-dom";
import Header from "./Header";

function Nav() {
  return (
    <nav>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/resources"><div>Live-Feed</div></Link>
      <Link to="/quiz"><div>Quiz</div></Link>

   
    </nav>
  )
}
export default Nav