import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/html"><div>HTML</div></Link>
      <Link to="/CSS"><div>CSS</div></Link>
      <Link to="js"><div>JavaScript</div></Link>
    </nav>
  )
}
export default Nav