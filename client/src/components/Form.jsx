import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";

function Form(props) {
  const [author, setAuthor] = useState("");
  const [concept, setConcept] = useState("");
  const [comment, setComment] = useState("");
  const [topic, setTopic] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      author,
      concept,
      comment,
      topic,
    };
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/resources");
  };



  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="concept">Concept: </label>
      <input
        id="concept"
        value={concept}
        type="text"
        onChange={(e) =>setConcept(e.target.value)} />
      <label htmlFor="author">Author: </label>
      <input
        id="author"
        value={author}
        type="text"
        onChange={(e) => setAuthor(e.target.value)} />
      <label htmlFor="topic">Topic: </label>
      <select className="topics" id="topics" >
        <option value="Placeholder" placeholder="Topic Drop down menu">General</option>
        <option value="HTML" placeholder="Topic Drop down menu">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Javascript Vanilla">Javascript Vanilla</option>
        <option value="React">React</option>
        <option value="IDK">Unsure</option>
      </select>
      <label htmlFor="comment">Comment: </label>
      <textarea
        id="comment"
        value={comment}
        type="text"
        onChange={(e) => setComment(e.target.value)} />
      <button id="submit" type="submit">Submit Me!</button>
    </form>
  )
}

export default Form;