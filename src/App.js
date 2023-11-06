import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CarTripCalculator from './components/Calculator';
import StartComponent from './components/StartComponent';
import NavBar from './components/NavBar'
import NumberCalculator from './components/NumberCalculator';
import Ruler from './components/Ruler';
import WeatherComponent from './components/WeatherComponent';

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
          <Route path='/ruler' element={<Ruler/>}/>
          <Route path='/weather' element={<WeatherComponent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
    );
}

export default App;
