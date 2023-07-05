// import { useState } from "react";

// const StringArea = ({ text, max }) => {

//     const [showFullText, setShowFullText] = useState(false)

//     const handleClick = () => {
//         setShowFullText(!showFullText)
//     };

//     let shortText = text;

//     if (text.length > max  && !showFullText) {
//     shortText = text.substring(0, max) +''+ 'show more ...';
//   }
//   return <p onClick={handleClick}>{shortText}</p>;
// };

// export default StringArea;

import  { useState } from "react";

const StringArea = ({ text, max }) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <p className="text-wrap break-words overflow-hidden">
      {showFullText ? text : `${text.substring(0, max)}...`}
      <button className="text-black px-1 py-0 ms-2 bg-blue-400" onClick={() => setShowFullText(!showFullText)}>
        {showFullText ? "show less" : "show more"}
      </button>
    </p>
  );
};

export default StringArea;





