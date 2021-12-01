import moment from "moment";
import React from "react";
import "./menuheader.css";
import { BiSearch } from "react-icons/bi";

const MenuHeader = ({ restaurantName }) => {
  return (
    <div className="bora__menu-header">
      <div className="bora__menu-header_details">
        <h1>{restaurantName}</h1>
        <p>{moment().format("dddd, DD MMMM YYYY")}</p>
      </div>
      <div className="bora__menu-header_searchbar">
        <span>
          <BiSearch color="#fff" />
        </span>
        <input
          id="searchbar"
          type="text"
          placeholder="Search for food, coffee, etc..."
        />
      </div>
    </div>
  );
};

export default MenuHeader;
