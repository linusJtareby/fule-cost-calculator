import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import CarTripCalculator from './components/Calculator';
import StartComponent from './components/StartComponent';
import NavBar from './components/NavBar'
import NumberCalculator from './components/NumberCalculator';
import WeatherComponent from './components/WeatherComponent';
import DogComponent from './components/DogComponent';

function App() {
  //Add api-key in .env
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey)

  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<StartComponent/>}/>
          <Route path='/fuel-calculator' element={<CarTripCalculator/>}/>
          <Route path='/calculator' element={<NumberCalculator/>}/>
          <Route path='/weather' element={<WeatherComponent/>}/>
          <Route path='/hundkollen' element={<DogComponent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
    );
}

export default App;
