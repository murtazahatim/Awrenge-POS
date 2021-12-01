import React from "react";
import { useRxData } from "rxdb-hooks";

const MenuGrid = ({ category }) => {
  const queryConstructor = (collection) =>
    collection.find().where("mealType").equals("hot");

  const { result: meals, isFetching } = useRxData("meals", queryConstructor);

  if (isFetching) {
    return "Loading Meal Inventory";
  }

  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
};

export default MenuGrid;

/*<ul>
        {meals.map((meal, idx) => (
          <li key={idx}>{meal.name}</li>
        ))}
      </ul>*/
