import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="company-logo">
        <img src="Logo.png"></img>
      </div>
      <Link to="/">
        <div className="header">Welcome to the Developer's Training Ground</div>
      </Link>
      <div className="value-prop">
        A training ground for aspiring developers.
      </div>
    </div>
  );
};

export default Header;
