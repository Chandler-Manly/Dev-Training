import "./Header.css";

const Header = () => {
  return (
    <div>
    <div className="company-logo">
        <img src="Logo.png"></img>
      </div>
      <div>
      <h1>
        Welcome to the <div className="Dev">Developer's</div> Training Ground
      </h1>
      <h3>
        <em>A training ground for aspiring developers.</em>
      </h3>
      </div>
      </div>
  );
};

export default Header;
