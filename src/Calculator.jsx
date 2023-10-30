import React, { useState } from 'react';
import styles from "./Calculator.css";

function CarTripCalculator() {
  const [fuelPrice, setFuelPrice] = useState('');
  const [distance, setDistance] = useState('');
  const [averageUsage, setAverageUsage] = useState('');
  const [totalCost, setTotalCost] = useState(null);

  const calculateTotalCost = () => {
    if (fuelPrice && distance && averageUsage) {
      const cost = ((distance / 10) * averageUsage) * fuelPrice;
      setTotalCost(cost);
    } else {
      setTotalCost(null);
    }
  };

  return (
    <div className='car-trip-calculator'>
      <h2>Bränslekostnad-räknare</h2>
      <form>
        <div>
          <label htmlFor="fuelPrice">Bränslepris: (kr/liter): </label>
          <input
            placeholder='Ange pris..'
            type="number"
            id="fuelPrice"
            value={fuelPrice}
            onChange={(e) => setFuelPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="distance">Sträcka: (km): </label>
          <input
          placeholder='Ange sträcka..'
            type="number"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="averageUsage">Genomsnittlig förbrukning: (liter/mil): </label>
          <input
            type="number"
            id="averageUsage"
            value={averageUsage}
            onChange={(e) => setAverageUsage(e.target.value)}
          />
        </div>
        <button type="button" onClick={calculateTotalCost}>
          Räkna ut total kostnad
        </button>
      </form>
      {totalCost !== null && (
        <div>
          <h3>Total kostnad för resa: {Math.round(totalCost)} kr</h3>
        </div>
      )}
    </div>
    )
}

export default CarTripCalculator;