import React, { useState } from "react";
import "./App.css";

export default function ({
  nameValidation,
  nameInputRef,
  nameErrorRef,
  numberErrorRef,
  numberInputRef,
  numberValidation,
  mailValidation,
  mailInputRef,
  mailErrorRef,
  messageValidation,
  messageInputRef,
  messageErrorRef,
  submitVal,
}) {
  // State to track remaining characters
  const [remainingCharacters, setRemainingCharacters] = useState(30);

  // Function to handle the textarea input
  const handleTextareaChange = (e) => {
    const enteredText = e.target.value;
    const remaining = 30 - enteredText.length;
    setRemainingCharacters(remaining >= 0 ? remaining : 0);
  };

  return (
    <>
      <div className="pageContainer">
        <div className="main">
          <div className="icon">
            <span className="material-symbols-outlined">send</span>
          </div>
          <div className="form">
            <div className="input-group">
              <label>Full Name</label>
              <input
                ref={nameInputRef}
                className="nameClass"
                type="text"
                placeholder="Enter your name"
              />
              <span ref={nameErrorRef} className="nameError d-hidden">
                Enter your name
              </span>
            </div>
            <div className="input-group">
              <label>Phone No.</label>
              <input
                ref={numberInputRef}
                type="text"
                placeholder="123 456 7890"
              />
              <span ref={numberErrorRef} className="numberError d-hidden">
                Invalid Number
              </span>
            </div>
            <div className="input-group">
              <label>Email Id</label>
              <input ref={mailInputRef} type="text" placeholder="Enter Email" />
              <span className=" d-hidden" ref={mailErrorRef}>
                Invalid Email
              </span>
            </div>
            <div className="input-group">
              <label>Your Message</label>
              <textarea
                ref={messageInputRef}
                rows="5"
                placeholder="Enter your message"
                onChange={(e) => {
                  handleTextareaChange(e);
                  messageValidation();
                }}
              />
              <span ref={messageErrorRef} className="messageTab">
                {remainingCharacters} characters left
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              nameValidation();
              numberValidation();
              mailValidation();
              submitVal();
            }}
            className="btnSub"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
