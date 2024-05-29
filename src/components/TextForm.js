import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleSpeechClick = () => {
    const textValue = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(textValue);
    props.showAlert("Speech is running", "success");
  };

  const handleRemoveExtraSpaceClick = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Removed extra spaces", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "#e7eef7",
              color: props.mode === "dark" ? "white" : "black",
              border:
                props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
            }}
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="6"
            placeholder="Enter text here to analyze"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-primary mx-1 my-1"
          onClick={handleSpeechClick}
        >
          <i class="fa-solid fa-volume-high"></i>
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-primary mx-1 my-1"
          onClick={handleRemoveExtraSpaceClick}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-outline-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear text
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((elem) => {
              return elem.length !== 0;
            }).length
          }{" "}
          words and {text.length} chars
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((elem) => {
              return elem.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text === "" ? "Enter text in the textbox to preview it here" : text}
        </p>
      </div>
    </>
  );
}
