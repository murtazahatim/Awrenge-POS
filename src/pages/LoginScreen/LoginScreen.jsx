import React from "react";
import logo from "../../assets/logo.svg";
import "./loginscreen.css";
import { LoginButton } from "../../components";

const LoginScreen = () => {
  return (
    <div className="bora__loginscreen">
      <div className="bora__loginscreen-header">
        <div className="bora__loginscreen-logo">
          <img src={logo} alt="logo" />
        </div>
        <h1>Awrenge Software</h1>
      </div>
      <div className="bora__loginscreen-loginbutton">
        <LoginButton />
      </div>
    </div>
  );
};

export default LoginScreen;
