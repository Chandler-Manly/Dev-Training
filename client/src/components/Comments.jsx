import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Comments(props) {
  const deleteComment = async () => {
    const commentURL = `${baseURL}/${props.info.id}`;
    await axios.delete(commentURL, config)
    props.setToggleFetch((curr) => !curr);
  }

  const { concept, author, topic, comment } = props.info.fields;

  return (
    <div>
      <p>Concept: {concept}</p>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
      <p>Comment: {comment}</p>
      <button onClick={deleteComment}>Delete</button>
      <Link to={`/edit/${props.info.id}`}>
      <button>Edit</button>
      </Link>

    </div>
  );
}

export default Comments;
