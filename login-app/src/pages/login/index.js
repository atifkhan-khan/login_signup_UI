import React from "react";
import FormLogin from "./FormLogin";
import "./styles.css";
import Spacer from "../../Components/Spacer";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="login-card">
        <div className="login-title-container">
          <text className="login-title">Login</text>
        </div>
        <div className="divider"></div>

        <Spacer />
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;
