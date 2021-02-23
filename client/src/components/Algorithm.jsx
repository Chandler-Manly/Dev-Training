// Source: https://www.freelancinggig.com/blog/2017/05/09/top-10-algorithms-every-software-engineer-know-heart/
// Images from: https://unsplash.com/

import "./Algorithm.css";
import { Link } from "react-router-dom";

function Algorithm(props) {
  const { name, definition, image } = props.algo.fields;

  return (  
    <div className="algo-thumbnail">
              <div className="algos">

        </div>
      <div className="algo-images">
        <Link to={`/algorithm`}>
          <img className="algo-pics" src={image} />
          </Link>
        </div>
      <div className="algo-name">{name}</div>
      <div className="algo-definition">{definition}</div>
    </div>
  );
}

export default Algorithm;
