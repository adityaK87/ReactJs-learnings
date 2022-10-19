import React, { useState } from "react";
import "./TextUtils.css";

function TextUtils() {
  const [text, setText] = useState("Type text here");

  const handleUpCase = () => {
    // console.log("handleUpCase was clicked" + text);
    let upText = text.toUpperCase();
    setText(upText);
  };

  const handleLowerCase = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
  };

  const handleReverse = () => {
    let reversText = text.split("").reverse().join(""); //characters reverssed
    // let reversText = text.split(" ").reverse().join(" "); //word to word reverse
    console.log(reversText);
    setText(reversText);
  };

  const handleClear = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    // console.log("handleOnChange clicked");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>Type Your Text Here</h1>
        <textarea
          name=""
          id=""
          cols="10"
          rows="5"
          className="textArea"
          value={text}
          onChange={handleOnChange}
        >
          Type text here
        </textarea>
        <div className="buttons">
          <button className="btn btn-upperCase" onClick={handleUpCase}>
            Convert to UpperCase
          </button>
          <button className="btn btn-lowerCase" onClick={handleLowerCase}>
            Convert to LowerCase
          </button>
          <button className="btn btn-reverse" onClick={handleReverse}>
            Reverse
          </button>
          <button className="btn btn-clear" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes and{" "}
          {0.008 * text.split(" ").length * 60} Seconds to read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextUtils;
