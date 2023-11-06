import "./StartComponent.css"
import QuoteComponent from "./QuoteComponent";

function StartComponent() {
    return (
        <>
            <div className="start-box">
                <div className="content-box">
                    <h2>Välkommen till verktygslådan!</h2> 
                    <div className="quote">
                    <QuoteComponent/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartComponent;