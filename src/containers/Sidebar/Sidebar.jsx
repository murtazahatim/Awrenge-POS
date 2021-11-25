import React, { useState } from "react";
import SidebarLinks from "../../components/SidebarLinks/SidebarLinks";
import "./sidebar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { logo, exit } from "./imports";

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
