import WeatherComponent from "../components/WeatherComponent";
import "./WeatherPage.css"

function WeatherPage(){
    return (
        <>

            <div class="grid-container">
                <div class="grid-item">
                    <WeatherComponent startingCity="Borås"/>
                </div>
                <div class="grid-item">
                    <WeatherComponent startingCity="Gothenburg"/>
                </div>
                <div class="grid-item">
                    <WeatherComponent startingCity="Stockholm"/>
                </div>
                <div class="grid-item">
                    <WeatherComponent startingCity=""/>
                </div>
                <div class="grid-item">            
                    <WeatherComponent startingCity=""/>
                </div>
                <div class="grid-item">
                    <WeatherComponent startingCity=""/>
                </div>
            </div>
        </>
    )
}

export default WeatherPage;