import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebarlinks.css";
import {
  home,
  discountVouchers,
  analyticsDashboard,
  menuManagement,
} from "./imports";

const SidebarLinks = () => {
  return (
    <nav className="bora__sidebar-nav_link">
      <NavLink to="/" className="bora__sidebar-nav_link-tag">
        <div>
          <img src={home} alt="home" className="bora__icon" />
        </div>
      </NavLink>

      <NavLink to="/discount-vouchers" className="bora__sidebar-nav_link-tag">
        <div>
          <img
            src={discountVouchers}
            alt="discount vouchers"
            className="bora__icon"
          />
        </div>
      </NavLink>

      <NavLink to="/analytics-dashboard" className="bora__sidebar-nav_link-tag">
        <div>
          <img
            src={analyticsDashboard}
            alt="analytics dashboard"
            className="bora__icon"
          />
        </div>
      </NavLink>

      <NavLink to="/menu-management" className="bora__sidebar-nav_link-tag">
        <div>
          <img
            src={menuManagement}
            alt="menu management"
            className="bora__icon"
          />
        </div>
      </NavLink>
    </nav>
  );
};

export default SidebarLinks;
