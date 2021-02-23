import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import "./Comments.css"

function Comments(props) {
  const deleteComment = async () => {
    const commentURL = `${baseURL}/${props.info.id}`;
    await axios.delete(commentURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  const { concept, author, topic, comment } = props.info.fields;

  return (
    <div className="comment-box">
      <p>Comment: {comment}</p>
      <p>Concept: {concept}</p>
      <p>Topic: {topic}</p>
      <p>Author: {author}</p>
      <div className="buttons">
        <button onClick={deleteComment}>Delete</button>
        
        <Link to={`/edit/${props.info.id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
}

export default Comments;
