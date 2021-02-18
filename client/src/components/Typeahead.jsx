import { useState } from "react";

const Typeahead = (props) => {
  const [concept, setConcept] = useState('');
  // create filteredReviews variable which has the output of filtering over props.reviews and only selecting those reviews in which the author state (for now) partially matches the review.fields.author
  const filteredInfos = props.info.filter((info) => info.fields.concept.toLowerCase().includes(concept.toLowerCase()));
  console.log(filteredInfos);
  return (
    <div className="typeahead">
      <input type="text" value={concept} onChange={(e) => setConcept(e.target.value)} />
      <div className="typeahead-results">
        {/* {concept && info.map((comment) => (
          <p key={info.id}>{comment.info.concept}</p>
        ))} */}
      </div>
    </div>
  );
};
export default Typeahead;