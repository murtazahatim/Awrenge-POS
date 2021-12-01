import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import CategoryPanelLinks from "./CategoryPanelLinks";

const CategoryPanel = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bora__category">
      <div className="bora__category-div">
        <CategoryPanelLinks />
        <hr size="1" />
      </div>

      <div className="bora__category-mobile">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="bora__category-menu_container scale-up-center">
            <CategoryPanelLinks />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPanel;
