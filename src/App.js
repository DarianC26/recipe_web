import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MealPage from './MealPage'
import Nav from './Nav';

function App() {
  const LOCAL_STORAGE_KEY = 'mealList';
  const meals = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  console.log(meals);

  return (
    <BrowserRouter>
      <Nav />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/meal' element={<MealPage meals={meals}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
