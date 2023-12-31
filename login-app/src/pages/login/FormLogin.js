import React from "react";
import Spacer from "../../Components/Spacer";


const FormLogin = () => {
  //const navigateToAdmin = useNavigate()
  function navigatetoAdminPanel(){
   // navigateToAdmin("../adminPanel/dashboard")
  }
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
            type={"email"}
            placeholder={"xyz@gmail.com"}
          />
        </div>
        <div className="input-element">
          <input
            className="input"
            type={"password"}
            placeholder={"Enter your password"}
          />
        </div>
      </div>

      <div className="forget-container">
        <text className="forget-text">Forget password</text>
      </div>

      <Spacer />

      <button className="login-button" onClick={navigatetoAdminPanel}>
        Login
      </button>
    </form>
  );
};

export default FormLogin;
