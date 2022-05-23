import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MealPage from './MealPage'
import Nav from './Nav';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/meal' element={<MealPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
