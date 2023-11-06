import "./StartComponent.css"
import QuoteComponent from "./QuoteComponent";
import WeatherComponent from "./WeatherComponent";

function StartComponent() {
    return (
        <>
            <div className="start-box">
                <div className="content-box">
                    <h2>Välkommen till verktygslådan!</h2> 
                    <div className="quote">
                    <QuoteComponent/>
                    </div>
                    <WeatherComponent/>
                </div>
            </div>
        </>
    )
}

export default StartComponent;