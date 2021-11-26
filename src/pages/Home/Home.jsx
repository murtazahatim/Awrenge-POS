import React from "react";
import "./home.css";
import { MenuPanel, OrderPanel } from "../../containers";

const Home = () => {
  return (
    <div className="bora__home">
      <MenuPanel />
      <OrderPanel />
    </div>
  );
};

export default Home;
