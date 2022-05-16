import React from 'react';
import Meal from './Meal';

function Meals({ meals }) {
    return (
        <section className="meals">
        {meals.recipes.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
        </section>
    );
}

/*
    return (
        <section className="meals">
          {meals.recipes.map((meal) => {
            return (
                <p key={meal.id}>
                    {meal.title}
                </p>
            );
        })}
      </section>
    );
    */

export default Meals