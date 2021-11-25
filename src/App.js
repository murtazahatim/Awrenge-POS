import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  DiscountVouchers,
  AnalyticsDashboard,
  MenuManagement,
} from "./pages";
import { Sidebar } from "./containers";

function App() {
  return (
    <div className="App">
      <Router className="bora__router">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route
            exact
            path="/discount-vouchers"
            element={<DiscountVouchers />}
          />
          <Route
            exact
            path="/analytics-dashboard"
            element={<AnalyticsDashboard />}
          />
          <Route exact path="/menu-management" element={<MenuManagement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
