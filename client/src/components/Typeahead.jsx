// import { useState } from "react";
// Attended workshop during project week for this code.

// const Typeahead = (props) => {
//   const [concept, setConcept] = useState("");
//   const filteredInfos = props.fields.filter((info) =>
//     info.fields.concept.toLowerCase().includes(concept.toLowerCase()));

//   return (
//     <div className="typeahead">
//       <label>Search:</label>
//       <input
//         type="text"
//         value={concept}
//         onChange={(e) => setConcept(e.target.value)}
//       />
//       <div className="typeahead-results">
//         {concept &&
//           filteredInfos.map((info) => (
//             <p key={info.id}>{info.fields.concept}</p>
//           ))}
//       </div>
//     </div>
//   );
// };
// export default Typeahead;
