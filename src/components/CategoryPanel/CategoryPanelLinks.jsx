import React from "react";
import { NavLink } from "react-router-dom";
import "./categorypanel.css";
import { useLocation } from "react-router-dom";

const CategoryPanelLinks = () => {
  let location = useLocation();
  return (
    <nav className="bora__category-panel">
      {location.pathname === "/home" ? (
        <NavLink to="/home/" className="bora__category-panel_option active">
          <p>All-day</p>
        </NavLink>
      ) : (
        <NavLink to="/home/" className="bora__category-panel_option">
          <p>All-day</p>
        </NavLink>
      )}

      <NavLink to="/home/main-course" className="bora__category-panel_option">
        <p>Main Course</p>
      </NavLink>

      <NavLink to="/home/breakfast" className="bora__category-panel_option">
        <p>Breakfast</p>
      </NavLink>

      <NavLink to="/home/soups" className="bora__category-panel_option">
        <p>Soups</p>
      </NavLink>

      <NavLink to="/home/grill" className="bora__category-panel_option">
        <p>Grills</p>
      </NavLink>

      <NavLink to="/home/appetizers" className="bora__category-panel_option">
        <p>Appetizers</p>
      </NavLink>

      <NavLink to="/home/desserts" className="bora__category-panel_option">
        <p>Desserts</p>
      </NavLink>

      <NavLink to="/home/drinks" className="bora__category-panel_option">
        <p>Beverages</p>
      </NavLink>
    </nav>
  );
};

export default CategoryPanelLinks;
