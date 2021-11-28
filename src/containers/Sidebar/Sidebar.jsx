import React from "react";
import SidebarLinks from "../../components/SidebarLinks/SidebarLinks";
import "./sidebar.css";
import { logo, exit } from "./imports";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { logout } = useAuth0();

  return (
    <div className="bora__sidebar">
      <div className="bora__sidebar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="bora__sidebar-nav">
        <SidebarLinks />
      </div>
      <div
        className="bora__sidebar-exit btn btn-danger btn-block"
        onClick={() => {
          logout({
            returnTo: window.location.origin + "/login",
          });
        }}
      >
        <img className="bora__sidebar-exit__icon" src={exit} alt="exit" />
      </div>
    </div>
  );
};

export default Sidebar;
