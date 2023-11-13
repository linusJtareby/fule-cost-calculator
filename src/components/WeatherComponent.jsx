import "./WeatherComponent.css"
const { useState, useEffect } = require("react")

function WeatherComponent(props) {
    const apiUrl = "https://api.api-ninjas.com/v1/weather?city="


    const [weatherObject, setWeatherObject] = useState([])
    const [input, setInput] = useState(props.startingCity)
    const [cityHeader, setCityHeader] = useState('')
    const [backgroundImageURL, setBackgroundImageURL] = useState('')

    useEffect(() => {
        fetchWeather(input)
    }, [])

    const setBackgroundImg = (cloudPct) => {
        if(cloudPct === null || cloudPct === undefined || cloudPct === ""){
            setBackgroundImageURL('')
        }
        else if(cloudPct >= 60 && cloudPct <= 94){
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
        <>
            <div className="container"style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.9)), url("${backgroundImageURL}")`,}}>
                <div className="weather">
                    <div>
                    {Object.keys(weatherObject).length > 0 ? (
                        <div>
                            <h2>Väder i {cityHeader} just nu:</h2>
                            <h4>Temperatur: {weatherObject.temp} *C</h4>
                            <h4>Känns som: {weatherObject.feels_like} *C</h4>
                            <h4>Vindhastighet: {weatherObject.wind_speed} m/s</h4>
                            <h4>Luftfuktighet: {weatherObject.humidity} hygormeter</h4>
                        </div>
                    ) : (<p>Loading weather...</p>)}
                    </div>
                    <form className="form" onSubmit={(e) => {e.preventDefault(); handleClick();}}>
                        <input 
                            className="weather-search-box"
                            type="text"
                            placeholder="Sök stad..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <h4>Sök andra städer för att se väder där</h4>
                        <button 
                            className="weather-search-button"
                            id="knapp"
                            type="submit"></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default WeatherComponent;