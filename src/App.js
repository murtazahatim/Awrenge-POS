import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  DiscountVouchers,
  AnalyticsDashboard,
  MenuManagement,
} from "./pages";
import { Sidebar } from "./containers";
import { Provider, useRxData } from "rxdb-hooks";
import * as Database from "./DatabaseService";

function App() {
  const [db, setDb] = useState();

  useEffect(() => {
    const initDB = async () => {
      const _db = await Database.get();
      setDb(_db);
    };
    initDB();
  }, []);

  return (
    <Provider db={db}>
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
    </Provider>
  );
}

export default App;
