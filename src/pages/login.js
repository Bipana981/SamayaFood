import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import background from "./images/pizza.jpg";
import "./css/login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  // User Login info
  const database = [
    {
      username: "Hello",
      password: "Hello1"
    },
    {
      username: "World",
      password: "world2"
    }
  ];

  const errors = {
    username: "invalid username",
    password: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="heading-three"> <h3> Don't have an account?</h3>
        <h4>Forgot Password?</h4>
        </div>
      </form>
    </div>
  );

  return (
 
    <div className="app">
      <div className="login-form">
        <div className="title"> LogIn </div>
        {/* <div style ={{backgroundImage:'url($[background])'}}>
        </div> */}
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div> 
  );
}


export default Login;