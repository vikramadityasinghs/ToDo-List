import React, { useState } from "react";
import validator from "validator";

const Check = () => {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        marginLeft: "300px",
      }}
    >
      <pre>
        <h2>Validating Email in ReactJS</h2>
        <span>Enter Email: </span>
        <input
          type="text"
          id="userEmail"
          onChange={(e) => validateEmail(e)}
        ></input>{" "}
        <br />
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {emailError}
        </span>
      </pre>
    </div>
  );
};

export default Check;
// import React, { Component } from "react";

// export default class Details extends Component {
//   state = {
//     email: "",
//     name: "",
//     PhoneNumber: ""
//   };

//   handleChange = (e: { target: { value: any; name: string; }; }) => {
//     const { value, name } = e.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div>
//         <form className="col-md-5">
//           <div className="form-group">
//             <label> Email: </label>
//             <input
//               name="email"
//               value={this.state.email}
//               placeholder="email"
//               onChange={this.handleChange}
//             />{" "}
//             <br />
//           </div>
//           <div className="form-group">
//             <label> Name: </label>
//             <input
//               name="name"
//               value={this.state.name}
//               placeholder="name"
//               onChange={this.handleChange}
//             />
//           </div>
//           <button
//             type="button"
//             disabled={!this.state.email || !this.state.name}
//           >
//             Button
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
