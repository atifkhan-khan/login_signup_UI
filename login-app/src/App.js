import "./App.css";
import React, { useState } from "react";
import LoginPage from "./pages/login";
import SignUp from "./pages/sign-up";
import Dashboard from "./pages/adminPanel/dashboardPage";

function App() {
   const [navigateToLogin, setNavigate] = useState(true);
   
  //const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (
   
    //<div className="grid-container">
    <div >

      {/* <HeaderPage OpenSidebar = {OpenSidebar} />
      <SideBarPage openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <HomePage /> */}
      <button onClick={() => setNavigate(!navigateToLogin)}>
        {navigateToLogin ? "Sign Up" : "Login" }
      </button>
    

      {navigateToLogin ? <LoginPage /> : <Dashboard />}
    </div>
  );
}


export default App;
