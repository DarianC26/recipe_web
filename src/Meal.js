import React, {useState, useEffect} from 'react';
import './Meal.css'

function Meal ({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
      fetch(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setImageUrl(data.image);
        })
        .catch(() => {
          console.log("error");
        });
    }, [meal.id]);

    return (
        <div className='meal'>
            <div className='title'>
                <h1>{meal.title}</h1>
            </div>
            <div className='image'>
                <img src={imageUrl} alt="recipe" />
            </div>
            <div className="instructions">
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </div>
            <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer">Go to Recipe</a>
        </div>
    );
}

/*
        <div className='meal'>
            <div className='title'>
                <h1>{meal.title}</h1>
            </div>
            <img src={imageUrl} alt="recipe" />
            <div className="instructions">
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </div>
            <a href={meal.sourceUrl}>Go to Recipe</a>
*/

export default Meal