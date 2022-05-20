import React from 'react';
import Meal from './Meal';
import './HomeMeals.css';

function HomeMeals({ meals }) {
    return (
        <div className="meals">
        {meals.recipes.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
        </div>
    );
}

export default HomeMeals