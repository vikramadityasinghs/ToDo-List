import React from "react";
import "../src/styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Details from "./check";


function Home() {

  const [goToNotes, setGoToNotes] = React.useState(false);
  if (goToNotes) {
    return <Navigate to="notes" />;


    
// const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// const email_id = document.getElementById("email");

// function validateEmail(email_id: string): boolean {
//   if (expression.test(email_id)) {
//     console.log("true");
//     return true;
//   } else console.log("false");
//   return false;
// }
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
          <input type="text" className="entry-field" />
          <br />
          <label id="email" className="details">
            Email:
          </label>
          <br />
          <input type="email" className="entry-field" />
          <br />

          <label className="details">Phone Number</label>
          <br />
          <input type="text" className="entry-field" />
          <br />
          <button
            type="button"
            onClick={() => {
              setGoToNotes(true);
            }}
            className="button-style"
          >
            <span>Get started</span>
          </button>
        </form>
      </div>
      {/* <Details /> */}
    </div>
  );
}

export default Home;
