import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "#091e39" : "#E7EEF7",
          color: props.mode === "dark" ? "white" : "black",
          border: props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
          borderRadius: "5px",
        }}
      >
        <h1
          className="my-2"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          About Us
        </h1>
        <div className="accordion mb-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                }}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Analyze Your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                  borderRadius: "5px",
                }}
              >
                <p>Analyze Your Text section allows you to:</p>
                <ul>
                  <li>Count characters, words, and sentences</li>
                  <li>Find the frequency of words</li>
                  <li>Detect the language of the text</li>
                  {/* Add more analysis features */}
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                  borderRadius: "5px",
                }}
              >
                <p>This application is completely free to use. You can:</p>
                <ul>
                  <li>Access all features without any charges</li>
                  <li>Use it for personal and commercial purposes</li>
                  <li>No need to create an account or provide personal information</li>
                  {/* Add more free to use information */}
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#091e39" : "#E7EEF7",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                  borderRadius: "5px",
                }}
              >
                <p>TextUtils app is compatible with all modern web browsers including:</p>
                <ul>
                  <li>Google Chrome</li>
                  <li>Firefox</li>
                  <li>Safari</li>
                  <li>Microsoft Edge</li>
                  {/* Add more browser compatibility information */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
