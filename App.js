import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Namaste React using JSX.</h1>;
const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React
    </h1>
  );
};

const Heading = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React Functional Component</h2>
    </div>
  );
};
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<Heading />);
