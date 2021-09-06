import React, { useState } from 'react'

const TextForm = (props) => {

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const ChangeUpperCase = () => {
    setText(text.toUpperCase());
  }

  const ChangeLowerCase = () => {
    setText(text.toLowerCase());
  }
  
  const ClearText = () => {
    setText("");
  }

  return (
    <div className="container">
      <div className="my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows={8} />
        </div>
        <button className="btn btn-primary m-1" onClick={ChangeUpperCase}>UpperCase</button>
        <button className="btn btn-primary m-1" onClick={ChangeLowerCase}>LowerCase</button>
        <button className="btn btn-primary m-1" onClick={ClearText}>Clear Text</button>
      </div>
    </div>
  )
}

export default TextForm;
