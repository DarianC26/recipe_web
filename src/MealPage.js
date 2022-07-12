import React, {useState} from 'react'
import Meal from './Meal';
import './MealPage.css'

function MealPage() {
    const LOCAL_STORAGE_KEY = 'mealList';
    const [ingredients, setIngredients] = useState('');
    const [meals, setMeals] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));

    function getMealData() {
        fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?apiKey=88592da7a5de4e00b2ccea686f340179&ingredients=${ingredients}`
        )
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
                setMeals(data);
            })
            .catch(() => {
                console.log("error");
            });
    }

    function handleValue(e) {
        setIngredients(e.target.value);
    }

    return (
        <div className='container'>
            <div className='search'>
                <input
                    type="text"
                    placeholder="Ingredients"
                    onChange={handleValue}
                    className='input_box'
                />
                <button onClick={getMealData}>Search</button>
            </div>
            <div className="meals">
            {meals.map((meal) => {
              return <Meal key={meal.id} meal={meal} />;
            })}
            </div>
        </div>
    );
}

export default MealPage;
