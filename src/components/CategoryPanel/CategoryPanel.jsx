import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import {CategoryPanelLinksMenu, CategoryPanelLinksMenuManagement} from "./CategoryPanelLinks";

const CategoryPanel = ({parent}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bora__category">
      <div className="bora__category-div">
        {parent === "Menu" ? (<CategoryPanelLinksMenu />) : (<CategoryPanelLinksMenuManagement />)}
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
            {parent === "Menu" ? (<CategoryPanelLinksMenu />) : (<CategoryPanelLinksMenuManagement />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPanel;
