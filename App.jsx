import React from "react";
import "./App.css";
export default function () {
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
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-group">
              <label>Phone No.</label>
              <input type="text" placeholder="123 456 7890" />
            </div>
            <div className="input-group">
              <label>Email Id</label>
              <input type="text" placeholder="Enter Email" />
            </div>
            <div className="input-group">
              <label>Your Message</label>
              <textarea rows="5" placeholder="Enter your message" />
            </div>
          </div>
          <button className="btnSub">Submit</button>
        </div>
      </div>
    </>
  );
}
