import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating} maxRating={10} />
//       <p> this movie was rated {movieRating}</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={["terrible", "bad", "ok", "good", "amazing"]}
    />
    <StarRating maxRating={5} className="test" defaultRating={3} />
    <StarRating size={24} color="red" className="test" defaultRating={2} /> */}

    {/* <Test /> */}
  </React.StrictMode>
);
