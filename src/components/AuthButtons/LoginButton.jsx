import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./buttons.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div
      id="bora__loginbutton"
      onClick={() =>
        loginWithRedirect({ appState: { targetUrl: window.location.pathname } })
      }
    >
      <p>Log In</p>
    </div>
  );
};

export default LoginButton;
