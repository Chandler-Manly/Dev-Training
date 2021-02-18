
function Comments(props) {

  const { concept, author, topic, comment } = props.info.fields;

  return (
    <div>
      <p>Concept: {concept}</p>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
      <p>Comment: {comment}</p>

    </div>
  );
}

export default Comments;
