import React, { useState } from 'react'

const TextForm = (props) => {

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const ChangeUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  }

  const ChangeLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  }

  const ClearText = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  }

  const CopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const RemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  return (
    <div className="container" style={{
      background: props.mode === "dark" ? "#042743" : "white",
      color: props.mode === "dark" ? "white" : "black"
    }}>
      <div className="my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="myBox"
            rows={8}
            style={{
              background: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }} />
        </div>
        <button className="btn btn-primary m-1" onClick={ChangeUpperCase}>Change to Upper Case</button>
        <button className="btn btn-primary m-1" onClick={ChangeLowerCase}>Change to Lower Case</button>
        <button className="btn btn-primary m-1" onClick={ClearText}>Clear Text</button>
        <button className="btn btn-primary m-1" onClick={CopyText}>Copy Text</button>
        <button className="btn btn-primary m-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p><b>Total Words:</b> {text.length < 1 ? 0 : text.split(" ").length}</p>
        <p><b>Total Characters:</b> {text.length}</p>
        <p><b>Total Time to read:</b> {0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p> {text.length === 0 ? "No text to display" : text}</p>
      </div>
    </div>
  )
}

export default TextForm;
