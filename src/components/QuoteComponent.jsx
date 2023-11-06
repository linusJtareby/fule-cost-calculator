
const { useState, useEffect } = require("react");

const apiUrl = "https://api.api-ninjas.com/v1/quotes"

// Renders two times in dev-env. 
//  To avoid this, you can comment out the <React.StrictMode> tag in index.js file.
function QuoteComponent() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {

    fetch(apiUrl, {
      headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY
      }
    })
      .then((response) => response.json())
      .then((quotes) => { 
        setQuotes(quotes);
        // console.log(quotes)
      })
      .catch((error) => {
        console.error("Failed to fetch data", error);
      });
  }, []);
    
  return (
    <div>
      {quotes.length > 0 ? (
        <div>
          <h4>Dagens quote</h4>
          {quotes.map((quote, index) => (
            <div key={index}>
              <p>{quote.quote}</p>
              <p>- {quote.author}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
}
export default QuoteComponent;
