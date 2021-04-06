import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const clickHandler = () => {
    setHeadingText("Submitted");
  };

  function handleChange(event) {
    setHeadingText(`Hello ${event.target.value.toUpperCase()}`);
    console.log(event.target.value);
  }

  const [isMouseOver, setMouseOver] = useState(false);
  const mouseOver = () => {
    setMouseOver(true);
  };
  const mouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input
        onChange={handleChange}
        style={{ color: "red" }}
        type="text"
        placeholder="What's your name?"
      />
      <button
        onClick={clickHandler}
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
        style={{ backgroundColor: isMouseOver && "black" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
