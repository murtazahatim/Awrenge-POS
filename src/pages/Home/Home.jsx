import React from "react";
import "./home.css";
import { MenuPanel, OrderPanel } from "../../containers";

const Home = ({ restaurantName }) => {
  return (
    <div className="bora__home">
      <div className="bora__home-menupanel">
        <MenuPanel restaurantName={restaurantName} />
      </div>
      <div className="bora__home-orderpanel">
        <OrderPanel />
      </div>
    </div>
  );
};

export default Home;
