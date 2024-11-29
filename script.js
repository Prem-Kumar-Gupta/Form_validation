import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

const root = createRoot(document.getElementById("root"));

function ParentComponent() {
  const nameInputRef = React.useRef(null);
  const nameErrorRef = React.useRef(null);
  const numberInputRef = React.useRef(null);
  const numberErrorRef = React.useRef(null);
  const mailInputRef = React.useRef(null);
  const mailErrorRef = React.useRef(null);
  const messageInputRef = React.useRef(null);
  const messageErrorRef = React.useRef(null);

  function submitVal() {
    if (
      nameErrorRef.current &&
      numberErrorRef.current &&
      mailErrorRef.current &&
      messageErrorRef.current &&
      nameErrorRef.current.classList.contains("d-hidden") &&
      numberErrorRef.current.classList.contains("d-hidden") &&
      mailErrorRef.current.classList.contains("d-hidden") &&
      messageErrorRef.current.classList.contains("d-hidden")
    ) {
      nameInputRef.current.value = "";
      mailInputRef.current.value = "";
      numberInputRef.current.value = "";
      messageInputRef.current.value = "";
    }
  }
  function nameValidation() {
    if (!nameInputRef.current) {
      return;
    }
    if (nameInputRef.current.value === "") {
      nameErrorRef.current.classList.remove("d-hidden");
    } else {
      nameErrorRef.current.classList.add("d-hidden");
    }
  }

  function numberValidation() {
    if (!numberInputRef.current) {
      return;
    }
    if (
      isNaN(numberInputRef.current.value) ||
      numberInputRef.current.value.trim() === "" ||
      numberInputRef.current.value.length < 10
    ) {
      numberErrorRef.current.classList.remove("d-hidden");
    } else {
      numberErrorRef.current.classList.add("d-hidden");
    }
  }
  function mailValidation() {
    if (!mailInputRef.current) {
      return;
    }
    if (
      mailInputRef.current.value === "" ||
      !mailInputRef.current.value.includes("@") ||
      !mailInputRef.current.value.includes(".") ||
      !mailInputRef.current.value.includes("com") ||
      !mailInputRef.current.value.includes("mail")
    ) {
      mailErrorRef.current.classList.remove("d-hidden");
    } else {
      mailErrorRef.current.classList.add("d-hidden");
    }
  }
  function messageValidation() {
    if (!messageInputRef.current) {
      return;
    }

    if (messageInputRef.current.value.length > 30) {
      messageErrorRef.current.classList.add("d-hidden");
    } else {
      messageErrorRef.current.classList.remove("d-hidden");
    }
  }

  return (
    <App
      nameValidation={nameValidation}
      nameInputRef={nameInputRef}
      nameErrorRef={nameErrorRef}
      numberValidation={numberValidation}
      numberInputRef={numberInputRef}
      numberErrorRef={numberErrorRef}
      mailValidation={mailValidation}
      mailInputRef={mailInputRef}
      mailErrorRef={mailErrorRef}
      messageValidation={messageValidation}
      messageInputRef={messageInputRef}
      messageErrorRef={messageErrorRef}
      submitVal={submitVal}
    />
  );
}

root.render(<ParentComponent />);
