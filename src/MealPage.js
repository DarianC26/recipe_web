import React from 'react'
import Meal from './Meal';
import './MealPage.css'

function MealPage({ meals }) {

    return (
        <div className="meals">
        {meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
        </div>
    );
}

export default MealPage;
