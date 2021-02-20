import { useState } from "react";
// Attended workshopd during project week for this code. 
const Typeahead = (props) => {
  const [concept, setConcept] = useState('');
  // create filteredReviews variable which has the output of filtering over props.reviews and only selecting those reviews in which the author state (for now) partially matches the review.fields.author
  const filteredInfos = props.infos.filter((info) => info.fields.concept.toLowerCase().includes(concept.toLowerCase()));
  
  return (
    <div className="typeahead">
      <label>Search:</label>
      <input type="text" value={concept} onChange={(e) => setConcept(e.target.value)} />
      <div className="typeahead-results">
        {concept && filteredInfos.map((info) => (
          <p key={info.id}>{info.fields.concept}</p>
        ))}
      </div>
    </div>
  );
};
export default Typeahead;