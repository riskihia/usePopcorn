import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./App.jsx";
// import StarRating from "./StarRating";
// import TextExpanderApp from "./TextExpanderApp";

// const textStyle = {
//   borderColor: "balck",
//   borderStyle: "solid",
//   backgroundColor: "grey",
// };

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating} />
//       <p>This moveiw was rated {movieRating} yey </p>
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    {/* Start Rating */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "bad", "okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} color="red" />
    <StarRating size={24} color="pink" />
    <StarRating style={textStyle} defaultRating={0} />
    <Test /> */}

    {/* TestExpander */}
    {/* <TextExpanderApp /> */}
  </StrictMode>
);
