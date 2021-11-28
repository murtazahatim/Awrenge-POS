import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import {
  LoginScreen,
  Home,
  DiscountVouchers,
  AnalyticsDashboard,
  MenuManagement,
} from "./pages";
import { Sidebar } from "./containers";
import { Provider } from "rxdb-hooks";
import * as Database from "./DatabaseService";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [db, setDb] = useState();
  let location = useLocation();
  let { isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    const initDB = async () => {
      const _db = await Database.get();
      setDb(_db);
    };
    initDB();
  }, []);

  if (isLoading) {
    return "Loading";
  }

  return (
    <Provider db={db}>
      <div className="App">
        {location.pathname !== "/login" && <Sidebar />}
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route
            exact
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/discount-vouchers"
            element={
              isAuthenticated ? <DiscountVouchers /> : <Navigate to="/login" />
            }
          />
          <Route
            exact
            path="/analytics-dashboard"
            element={
              isAuthenticated ? (
                <AnalyticsDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            exact
            path="/menu-management"
            element={
              isAuthenticated ? <MenuManagement /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
