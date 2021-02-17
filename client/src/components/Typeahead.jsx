import { useState } from "react";
const Typeahead = (props) => {
  const [author, setAuthor] = useState('');
  // create filteredReviews variable which has the output of filtering over props.reviews and only selecting those reviews in which the author state (for now) partially matches the review.fields.author
  const filteredReviews = props.reviews.filter((review) => review.fields.author.toLowerCase().includes(author.toLowerCase()));
  console.log(filteredReviews);
  return (
    <div className="typeahead">
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <div className="typeahead-results">
        {author && filteredReviews.map((review) => (
          <p key={review.id}>{review.fields.author}</p>
        ))}
      </div>
    </div>
  );
};
export default Typeahead;