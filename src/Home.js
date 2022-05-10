import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className='banner'>
            <div className='grid'>
                <div className='title'>
                    <strong>
                        Find a Recipe
                    </strong>
                </div>
                <div className='search'>
                    <input
                    type="number"
                    placeholder="Calories (e.g. 2000)"
                    className='input_box'
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
