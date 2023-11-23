import "./App.css";

import React from "react";
import LoginPage from "./pages/login";
import SignUp from "./pages/sign-up";
import { useState } from "react";

function App() {
  const [navigateToLogin, setNavigate] = useState(true);

  return (
    <div>
      <button onClick={() => setNavigate(!navigateToLogin)}>
        Toggle Pages
      </button>

      {navigateToLogin ? <LoginPage /> : <SignUp />}
    </div>
  );
}

export default App;
