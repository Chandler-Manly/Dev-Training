// Source: https://www.freelancinggig.com/blog/2017/05/09/top-10-algorithms-every-software-engineer-know-heart/
// Images from: https://unsplash.com/ 

import axios from "axios";
import { algoURL, algoConfig } from "../services";

function Algorithm(props) {
  
  const { name, definition, image } = props.algo.fields;

  return (
    <div className="algo-thumbnals">
      <p>Name: {name}</p>
      <p>Definition: {definition}</p>
      <img src={image} alt="Algorithm"></img>
    </div>
  );
}


export default Algorithm