import React from 'react'
import './mealcard.css';

function MealCard({name, price, inventory, image}) {
    return (
        <div className="bora__mealcard">
            <div className="bora__mealcard-image">
                <img src={image} alt={name} />
            </div>
            <div className="bora__mealcard-content">
                <div className="bora__mealcard-content_main">
                    <h3>{name}</h3>
                    <p>INR {price}</p>
                </div>
                <p>{inventory} servings available</p>
            </div>
        </div>
    )
}

export default MealCard
