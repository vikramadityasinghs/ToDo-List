import React, { useState } from "react";
import "../src/styles.css";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import Check from "./check";

function Home() {
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [numError, setNumError] = useState("");
  // const[disabled,setDisabled] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-Z\s-]+$/;
  const numRegex = /^[7-9]\d{9}$/;
  const ifErrors = emailError.length && nameError.length && numError.length;

  function validateName(name: string) {
    if (nameRegex.test(name)) {
      setNameError("");
    } else {
      setNameError("Enter valid Name!");
    }
  }

  function validateEmail(email: string) {
    if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  }

  function validateNum(num: string) {
    if (numRegex.test(num)) {
      setNumError("");
    } else {
      setNumError("Enter valid Number!");
    }
  }

  function gotoHandler() {
    if (!ifErrors) {
      setGoToNotes(true);
    } else setGoToNotes(false);
  }

  const [goToNotes, setGoToNotes] = React.useState(false);
  if (goToNotes) {
    return <Navigate to="notes" />;
  }

  return (
    <div className="main">
      <div className="heading">
        <h1>Checklist!</h1>
      </div>
      <div className="details-field">
        <form method="post">
          <label className="details">Enter Full Name</label>
          <br />
          <div className="email-div">
            <input
              type="text"
              placeholder="Full Name"
              className="email-field"
              onChange={(e) => validateName(e.target.value)}
            ></input>{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {nameError}
            </span>
          </div>
          <br />
          <label id="email" className="details">
            Email:
          </label>
          <br />
          <div className="email-div">
            <input
              type="text"
              id="userEmail"
              placeholder="email Id"
              className="email-field"
              onChange={(e) => validateEmail(e.target.value)}
            ></input>{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {emailError}
            </span>
          </div>
          <br />
          <label className="details">Phone Number</label>
          <br />
          <div className="email-div">
            <input
              type="text"
              placeholder="Phone Number"
              className="email-field"
              maxLength={10}
              id="userEmail"
              onChange={(e) => validateNum(e.target.value)}
            ></input>{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {numError}
            </span>
          </div>
          <br />
          <button type="button" onClick={gotoHandler} className="button-style">
            <span>Get started</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
