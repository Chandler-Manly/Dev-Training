// Source: https://www.freelancinggig.com/blog/2017/05/09/top-10-algorithms-every-software-engineer-know-heart/
// Images from: https://unsplash.com/

import "./Algorithm.css";

function Algorithm(props) {

  const { name, definition, image } = props.algo.fields;
  return (
    <div className="algo-thumbnail">
    <div className="algo-images">
      <img src={image} /> 
      </div>
    <div className="algo-name">
      {name}
      </div>
    <div className="algo-definition">
      {definition}
      </div>
    </div>
  );
}

export default Algorithm;
