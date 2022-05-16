import React, {useState, useEffect} from 'react';

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
            <img src={imageUrl} alt="recipe" />
        </div>
    );
}

export default Meal