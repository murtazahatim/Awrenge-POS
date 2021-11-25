import React from "react";
import { Link, useState } from "react-router-dom";
import "./sidebarlink.css";
import {
  home,
  discountVouchers,
  analyticsDashboard,
  menuManagement,
} from "./imports";

const SidebarLink = ({ page }) => {
  return (
    <div className="bora__sidebar-nav_link">
      <Link to={`/${page}`} className="bora__sidebar-nav_link-tag">
        {page === "home" && <img src={home} alt={`${page}`} />}
        {page === "discount-vouchers" && (
          <img src={discountVouchers} alt={`${page}`} />
        )}
        {page === "analytics-dashboard" && (
          <img src={analyticsDashboard} alt={`${page}`} />
        )}
        {page === "menu-management" && (
          <img src={menuManagement} alt={`${page}`} />
        )}
      </Link>
    </div>
  );
};

export default SidebarLink;
