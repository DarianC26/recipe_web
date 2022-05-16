import React from 'react';

function Meals({ meals }) {

    return (
        <section className="meals">
        {meals.map((meal) => {
          return (
              <p key={meal.id}>
                  {meal.title}
              </p>
          );
        })}
      </section>
    );
}

export default Meals