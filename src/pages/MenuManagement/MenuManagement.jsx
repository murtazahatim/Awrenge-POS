import React from "react";
import MenuManagementHeader from "../../components/MenuManagementHeader/MenuManagementHeader";
import { CategoryPanel, MenuGrid } from "../../components";
import { Route, Routes } from "react-router";
import "./menumanagement.css";

const MenuManagement = () => {
  return (
    <div className="bora__menumanagement">
      <div className="bora__menumanagement-header">
      <MenuManagementHeader />
      <CategoryPanel parent="MenuManagement" />
      </div>
      <Routes>
        <Route exact path="/" element={<MenuGrid category="allDay" />} />
        <Route
          exact
          path="/main-course"
          element={<MenuGrid category="mainCourse" />}
        />
        <Route
          exact
          path="/breakfast"
          element={<MenuGrid category="breakfast" />}
        />
        <Route exact path="/soups" element={<MenuGrid category="soup" />} />
        <Route exact path="/grill" element={<MenuGrid category="grill" />} />
        <Route
          exact
          path="/appetizers"
          element={<MenuGrid category="appetizer" />}
        />
        <Route
          exact
          path="/desserts"
          element={<MenuGrid category="dessert" />}
        />
        <Route exact path="/drinks" element={<MenuGrid category="drinks" />} />
      </Routes>
    </div>
  );
};

export default MenuManagement;
