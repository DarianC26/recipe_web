import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
