import React from 'react'
import Spacer from "../../Components/Spacer";


function FormSignUp() {
  return (
    <form className="form-container">
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="input-element">
          <input
            className="input"
            type={"full name"}
            placeholder={"Full name"}
          />
        </div>
        <div className="input-element">
          <input
            className="input"
            type={"email"}
            placeholder={"xyz@gmail.com"}
          />
        </div>
        <div className="input-element">
          <input
            className="input"
            type={"password"}
            placeholder={"Enter password"}
          />
        </div>
        <div className="input-element">
          <input
            className="input"
            type={"password"}
            placeholder={"Confirm password"}
          />
        </div>
      </div>

      <Spacer />

      <button className="login-button" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default FormSignUp