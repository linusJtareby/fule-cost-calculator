import React, { useState } from 'react';
import styles from "./Calculator.css";

function CarTripCalculator() {
  const [fuelPrice, setFuelPrice] = useState('');
  const [distance, setDistance] = useState('');
  const [averageUsage, setAverageUsage] = useState('');
  const [totalCost, setTotalCost] = useState(null);
  const [passengers, setPassengers] = useState('');
  const [costPerPassenger, setCostPerPassenger] = useState(null)

  const calculateTotalCost = () => {
    if (fuelPrice && distance && averageUsage) {
      const cost = ((distance / 10) * averageUsage) * fuelPrice;
      const costPerPassenger = cost / passengers;
      setTotalCost(cost);
      setCostPerPassenger(costPerPassenger);
    } else {
      setTotalCost(null);
      setCostPerPassenger(null);
    }
  };

  return (
    <div className='background'>
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
          <label htmlFor="averageUsage">Förbrukning: (liter/mil): </label>
          <input
          placeholder='Ange snittförbrukning...'
            type="number"
            id="averageUsage"
            value={averageUsage}
            onChange={(e) => setAverageUsage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passengers">Antal passagerare: </label>
          <input
            placeholder='Ange antal passagerare..'
            type="number"
            id="distance"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />
        </div>
        <button type="button" onClick={calculateTotalCost}>
          Räkna ut total kostnad
        </button>
      </form>
      {totalCost !== null && (
        <div>
          <h3>Total kostnad för resa: {Math.round(totalCost)} kr</h3>
          <h3>Kostnad per passagerare: {Math.round(costPerPassenger)} kr</h3>
        </div>
      )}

      <img src='https://s7d1.scene7.com/is/image/hyundai/2023-sonata-hev-ltd-calyspo-red-profile:Vehicle-Carousel?fmt=webp-alpha' width={475} height={160}></img>
    </div>
    </div>

    )
}

export default CarTripCalculator;