import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CarTripCalculator from './components/Calculator';
import StartComponent from './components/StartComponent';
import NavBar from './components/NavBar'
import NumberCalculator from './components/NumberCalculator';

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<StartComponent/>}/>
          <Route path='/fuel-calculator' element={<CarTripCalculator/>}/>
          <Route path='/calculator' element={<NumberCalculator/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
    );
}

export default App;
