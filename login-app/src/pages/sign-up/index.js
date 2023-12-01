import React from "react";
import FormSignUp from "./FormSignUp";
import "./style.css"
import Spacer from "../../Components/Spacer"

const SignUp = () => {
  return (
    <div className ='Top_container'>
      <div className='signUp-card' >
        <div className = "signUp-container">
          <text className = "signUp-title">Sign Up</text>
        </div>
        <div className="divider"></div>
        <Spacer />
    <FormSignUp/>
    </div>
  </div>
  )
};

export default SignUp;
