import React from "react";
import SidebarLinks from "../../components/SidebarLinks/SidebarLinks";
import "./sidebar.css";
import { logo, exit } from "./imports";

const Sidebar = () => {
  return (
    <div className="bora__sidebar">
      <div className="bora__sidebar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="bora__sidebar-nav">
        <SidebarLinks />
      </div>
      <div className="bora__sidebar-exit">
        <img className="bora__sidebar-exit__icon" src={exit} alt="exit" />
      </div>
    </div>
  );
};

export default Sidebar;
