import React from "react";
import SidebarLink from "../../components/SidebarLink/SidebarLink";
import "./sidebar.css";
import { logo, exit } from "./imports";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  let location = useLocation();

  return (
    <div className="bora__sidebar">
      <div className="bora__sidebar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="bora__sidebar-nav">
        <SidebarLink
          page="home"
          selected={location.pathname === "/home" || location.pathname === "/"}
        />
        <SidebarLink
          page="discount-vouchers"
          selected={location.pathname === "/discount-vouchers"}
        />
        <SidebarLink page="analytics-dashboard" />
        <SidebarLink page="menu-management" />
      </div>
      <div className="bora__sidebar-exit">
        <img src={exit} alt="exit" />
      </div>
    </div>
  );
};

export default Sidebar;
