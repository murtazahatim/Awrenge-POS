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
import { Sidebar, Header } from "./containers";
import { Provider } from "rxdb-hooks";
import * as Database from "./DatabaseService";
import { useAuth0 } from "@auth0/auth0-react";
import { MenuGrid } from "./components";

function App() {
  const [db, setDb] = useState();
  let location = useLocation();
  let { user, isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
      const initDB = async () => {
        const _db = await Database.get(user);
        setDb(_db);
      };

      initDB();
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return "Loading";
  }

  return (
    <Provider db={db}>
      <div className="App">
        {location.pathname !== "/login" && <Sidebar />}
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route exact path="/" element={<Navigate to="/home/" />} />

          <Route
            exact
            path="/home/*"
            element={
              isAuthenticated ? (
                <Home restaurantName={user.name} />
              ) : (
                <Navigate to="/login" />
              )
            }
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
            path="/menu-management/*"
            element={
              isAuthenticated ? <MenuManagement /> : <Navigate to="/login" />
            }
          />
        </Routes>
        {location.pathname !== "/login" && <Header />}
      </div>
    </Provider>
  );
}

export default App;
