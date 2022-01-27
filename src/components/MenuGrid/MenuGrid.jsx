import React from "react";
import { useRxData } from "rxdb-hooks";
import MealCard from "../MealCard/MealCard";
import './menugrid.css';

const MenuGrid = ({ category }) => {
  const queryConstructor = (collection) =>
    collection.find().where("mealType").equals(category);

  const { result: meals, isFetching } = useRxData("meals", queryConstructor);

  if (isFetching) {
    return "Loading Meal Inventory";
  }

  return (
    <div className="bora__menugrid">
      <div className="bora__menugrid-grid_container">
        <MealCard name="Fried Potato" inventory="20" price="15" image="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg"/>
        <MealCard name="Fried Potato" inventory="20" price="15" image="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg"/>
        <MealCard name="Fried Potato" inventory="20" price="15" image="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg"/>
        <MealCard name="Fried Potato" inventory="20" price="15" image="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg"/>
        <MealCard name="Fried Potato" inventory="20" price="15" image="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg"/>
        <MealCard name="Fried Potato" inventory="20" price="15" image="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg"/>
        <MealCard name="Fried Potato" inventory="20" price="15" image="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg"/>
        <MealCard name="Fried Potato" inventory="20" price="15" image="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg"/>
        <MealCard name="Fried Potato" inventory="20" price="15" image="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg"/>
        <MealCard name="Fried Potato" inventory="20" price="15" image="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Photos.jpg"/>
        {meals.map((meal, idx) => (
          <MealCard id={idx} name={meal.name} inventory={meal.inventory} price={meal.price} image={meal.image} />
        ))}
      
      </div>
    </div>
  );
};

export default MenuGrid;

/*<ul>
        {meals.map((meal, idx) => (
          <li key={idx}>{meal.name}</li>
        ))}
      </ul>*/
