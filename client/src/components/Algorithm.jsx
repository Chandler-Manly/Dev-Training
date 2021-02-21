// Source: https://www.freelancinggig.com/blog/2017/05/09/top-10-algorithms-every-software-engineer-know-heart/
// Images from: https://unsplash.com/

import "./Algorithm.css";

function Algorithm(props) {
  const { name, definition, image } = props.algo.fields;

  return (
    <div className="algo-thumbnails">
      <p className="name">{name}</p>
      <p className="definition">{definition}</p>
      <img src={image} alt="Algorithm" className="photos"></img>
    </div>
  );
}

export default Algorithm;
