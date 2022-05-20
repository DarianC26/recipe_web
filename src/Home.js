import React, {useState, useEffect} from 'react';
import './Home.css';
import './Home.css';
import HomeMeals from './HomeMeals';

function Home() {
    const [meals, setMeals] = useState(null);
    const [ingredients, setIngredients] = useState('');
    const LOCAL_STORAGE_KEY = 'mealList';


    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=88592da7a5de4e00b2ccea686f340179&number=3`
        )
            .then((response) => response.json())
            .then((data) => {
                setMeals(data);
            })
            .catch(() => {
                console.log("error");
            });
    }, [])

    function getMealData() {
        fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?apiKey=88592da7a5de4e00b2ccea686f340179&ingredients=${ingredients}`
        )
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
                window.location.href = "/meal"
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
            <div className='banner'>
                <div className='grid'>
                    <div className='title'>
                        <strong>
                            Find a Recipe
                        </strong>
                    </div>
                    <div className='search'>
                        <input
                        type="text"
                        placeholder="Ingredients"
                        onChange={handleValue}
                        className='input_box'
                        />
                        <button onClick={getMealData}>Get Daily Meal Plan</button>
                    </div>
                </div>
            </div>

            <div className='default'>
                {meals && <HomeMeals meals={meals} />}
            </div>

        </div>
    );
}

export default Home;
