# Fuel Cost Calculator-EN

# Description

My little fun project started with the idea of creating a program capable of calculating the fuel cost for a car trip based
on fuel price, average fuel consumption, and distance. I used React to create a web-based user interface, and when I was finished,
I continued with some other ideas. I decided to create a website that has become quite extensive, where I could create some
fun components as coding practice and integrate them into one website.

The app has a Bootstrap navigation bar at the top with headings containing the different components.

# Homepage

The homepage consists of two components. One fetches a random quote from an API, and the other is an instance of the weather
component (described below).

# Calculator

Simple calculator that can perform addition, subtraction, division, and multiplication.

# Weather

A page consisting of 6 instances of the same component. In each instance, you can search for a city where a request is sent
to a weather API that returns the weather in that city. (Requires an API key)

# Dog Check

A component that allows the user to enter values for properties of dogs. When the user searches, a request is sent to a dog
API, which responds with 20 dogs that match the specified values. (API key required)

# PIs

The APIs used for both weather and dog checking are from https://api-ninjas.com/

Weather API: https://api-ninjas.com/api/weather
Quotes API: https://api-ninjas.com/api/quotes
Dogs API: https://api-ninjas.com/api/dogs
To access the APIs, you need to create an account on API-ninjas, where you will receive a key. To use the key in the app,
create a .env file and add the key as follows:

REACT_APP_API_KEY = "key"

# Fule-cost-calculator-SV

## Description

Mitt lilla roliga projekt började med idén att skapa ett program som kan beräkna bränslekostnaden för en bilresa baserat
på bränslepris, genomsnittlig bränsleförbrukning och avstånd. Jag använde React för att skapa ett webbaserat användargränssnitt
och när jag var klar fortsatte jag med några andra idéer. Jag bestämde mig för att skapa en webbplats som har blivit ganska
omfattande och där jag kunde skapa några roliga komponenter som kodträning och samtidigt integrera dem i en webbplats.

Appen har en Bootstrap-navigationsfält längst upp med rubriker som innehåller de olika komponenterna

# Startsida

Startsidan består av två komponenter där ena hämtar en slumpmässig quote from en API och den andra är en instans
av väderkomponenten (Beskrivs nedan)

# Miniräknare

Enkel kalkylator som kan utföra addition, subtraktion, division och multiplikation.

# Väder

En sida som består av 6 instanser av samma komponent. I varje instans kan man söka efter en stad där en förfrågan skickas till
en väder-api som returerar vädret i denna staden. (För att kunna använda APIn krävs nyckel)

# Hundkollen

En komponent som låter användaren mata in ett antal värden för egenskaper hos hundar, när användaren söker skicaks en request
till en hund-API som svarar med 20 hundar som matchar de värden som man angett (Krävs api-nyckel)

# API

API-erna som används för både vädret och hundkollen är från https://api-ninjas.com/

Weather-api: https://api-ninjas.com/api/weather
Quotes- api: https://api-ninjas.com/api/quotes
Dogs-api: https://api-ninjas.com/api/dogs

För att få tillgång till API-erna krävs att man skapar ett konto på API-ninjas, man får då en nyckel.
För att använda nyckeln i appen krävs att man skapar en .env fil där man lägger in nyckeln som:
REACT_APP_API_KEY = "nyckel"
