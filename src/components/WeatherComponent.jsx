import "./WeatherComponent.css"
const { useState, useEffect } = require("react")

function WeatherComponent() {
    const apiUrl = "https://api.api-ninjas.com/v1/weather?city="


    const [weatherObject, setWeatherObject] = useState([])
    const [input, setInput] = useState('Borås')
    const [cityHeader, setCityHeader] = useState('Borås')

    let city = 'Borås'
    useEffect(() => {
        fetchWeather(input)
    }, [])

    const fetchWeather = (city) => {
        fetch(`${apiUrl}${city}`, {
            headers: {
              'X-Api-Key': process.env.REACT_APP_API_KEY
            }
          })
          .then((response) => response.json())
          .then((weatherData) => {
            setWeatherObject(weatherData);
            console.log(weatherData);
        })
          .catch((error)=> console.error(error))
    }

    const handleClick = () => {
        fetchWeather(input);
        setCityHeader(input)
    }

    return(
        <div>
            <div>
            {Object.keys(weatherObject).length > 0 ? (
                <div>
                            <h2>Väder i {cityHeader} just nu:</h2>
                            <p>Temperatur: {weatherObject.temp} *C</p>
                            <p>Känns som: {weatherObject.feels_like} *C</p>
                            <p>Vindhastighet: {weatherObject.wind_speed} m/s</p>
                            <p>Luftfuktighet: {weatherObject.humidity} hygormeter</p>
                </div>
            ) : (<p>Loading weather...</p>)}
            </div>
            <form onSubmit={(e) => {e.preventDefault(); handleClick();}}>
                <input 
                    className="search-box"
                    type="text"
                    placeholder="Sök stad..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button 
                    className="search-button"
                    id="knapp"
                    content="Sök"
                    type="submit">
                        Sök
                </button>
            </form>
        </div>
    )
}

export default WeatherComponent;