import "./WeatherComponent.css"
const { useState, useEffect } = require("react")

function WeatherComponent() {
    const apiUrl = "https://api.api-ninjas.com/v1/weather?city="


    const [weatherObject, setWeatherObject] = useState([])
    const [input, setInput] = useState('Borås')
    const [cityHeader, setCityHeader] = useState('Borås')
    const [backgroundImageURL, setBackgroundImageURL] = useState('')

    useEffect(() => {
        fetchWeather(input)
    }, [])

    const setBackgroundImg = (cloudPct) => {
        if(cloudPct >= 60 && cloudPct <= 94){
            setBackgroundImageURL("/resources/cloudy.jpg")
        }
        else if(cloudPct <= 59){
            setBackgroundImageURL("/resources/sunny.jpg")
        }
        else{
            setBackgroundImageURL("/resources/rain.jpg")
        }
    }

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
            setBackgroundImg(weatherData.cloud_pct)
            console.log(backgroundImageURL)
        })
          .catch((error)=> console.error(error))
    }

    const handleClick = () => {
        fetchWeather(input);
        setCityHeader(input)
        setBackgroundImg(weatherObject.cloud_pct)
        console.log(backgroundImageURL)

    }

    return(
        <div className="weather" style={{
            width: "550px",
            border: "2px solid",
            backgroundImage: `url("${backgroundImageURL}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '40vh',
        }}>
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
            <form className="form" onSubmit={(e) => {e.preventDefault(); handleClick();}}>
                <input 
                    className="search-box"
                    type="text"
                    placeholder="Sök stad..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <h4>Sök andra städer för att se väder där</h4>
                <button 
                    className="search-button"
                    id="knapp"
                    type="submit">
                        Sök
                </button>
            </form>
        </div>
    )
}

export default WeatherComponent;