import React from "react";
import "./header.css";
import { logo, exit } from "./imports";
import { useAuth0 } from "@auth0/auth0-react";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const { logout } = useAuth0();
  return (
    <div className="bora__header">
      <div className="bora__header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="bora__header-icons">
        <span className="bora__header-order-large">
          <FiShoppingCart color="#eb966a" size={25} />
        </span>
        <span className="bora__header-order-small">
          <FiShoppingCart color="#eb966a" size={20} />
        </span>
        <div
          className="bora__header-exit btn btn-danger btn-block"
          onClick={() => {
            logout({
              returnTo: window.location.origin + "/login",
            });
          }}
        >
          <img className="bora__header-exit__icon" src={exit} alt="exit" />
        </div>
      </div>
    </div>
  );
};

export default Header;
