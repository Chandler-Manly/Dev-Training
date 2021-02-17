import { useState } from "react";
const Typeahead = (props) => {
  const [author, setAuthor] = useState('');
  // We worked on this code during a project week workshop 

  const filteredReviews = props.reviews.filter((review) => review.fields.author.toLowerCase().includes(author.toLowerCase()));

  return (
    <div className="typeahead">
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <div className="typeahead-results">
        {author && filteredReviews.map((review) => (
          <p key={review.id}>{review.fields.author}</p>

          // need a guard operator 
          // functions like a ternary 
        ))}
      </div>
    </div>
  );
};
export default Typeahead;