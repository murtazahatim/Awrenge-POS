import React from "react";
import "./menupanel.css";
import { useRxData } from "rxdb-hooks";

const MenuPanel = () => {
  const queryConstructor = (collection) =>
    collection.find().where("mealType").equals("hot");

  const { result: meals, isFetching } = useRxData("meals", queryConstructor);

  if (isFetching) {
    return "Loading Meal Inventory";
  }

  return (
    <div className="bora__menupanel">
      <ul>
        {meals.map((meal, idx) => (
          <li key={idx}>{meal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPanel;
