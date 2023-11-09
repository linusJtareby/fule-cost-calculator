import { useState, useEffect } from "react";
// import ReactSwitch from 'react-switch'
import "./DogComponent.css"

const apiUrl = "https://api.api-ninjas.com/v1/dogs?"

function DogComponent () {

    const [dogs, setDogs] = useState({})
    // const [input, setInput] = useState('')

    //FilterSwitches
    // const [trainabilityFilter, setTrainabilityFilter] = useState(true)
    // const [protectivenessFilter, setProtectivenessFilter] = useState(false)
    // const [barkingFilter, setBarkingFilter] = useState(false)
    const [dogIndex, setDogIndex] = useState(0);

    const [searchString, setSearchString] = useState('')

    const [barking, setBarking] = useState('')
    const [shedding, setShedding] = useState('')
    const [energy, setEnergy] = useState('')
    const [protectiveness, setProtectiveness] = useState('')
    const [trainability, setTrainability] = useState('')

    const attributes = [
        { name: 'barking', value: barking },
        { name: 'shedding', value: shedding },
        { name: 'energy', value: energy },
        { name: 'protectiveness', value: protectiveness },
        { name: 'trainability', value: trainability },
    ];

    const fetchDogs = (input) => {
        fetch(`${apiUrl}${input}`, {
            headers: {
              'X-Api-Key': process.env.REACT_APP_API_KEY
            }
          })
          .then((response) => response.json())
          .then((dogData) => {
            setDogs(dogData);
            console.log(dogData);
            })
          .catch((error)=> console.error(error))
    }

    useEffect(() => {
        let updatedSearchString = '';
        for (const attribute of attributes) {
            if (attribute.value > 0) {
                updatedSearchString += `&${attribute.name}=${attribute.value}`;
            }
        }

        setSearchString(updatedSearchString);
    }, [barking, shedding, energy, protectiveness, trainability]);

    //Handle searchclick
    const handleClick = () => {
        fetchDogs(searchString)
    }

    // //Handle toggle for protectiveness-switch
    // const handleChangeProtectiveness = (val) => {
    //     if(trainabilityFilter || barkingFilter){
    //         setBarkingFilter(false);
    //         setTrainabilityFilter(false);
    //     }
    //     setProtectivenessFilter(val);
    //     setFilterWord('protectiveness');
    // }

    // //Handle toggle for trainability-switch
    // const handleChangeTrainability = (val) => {
    //     if(protectivenessFilter || barkingFilter){
    //         setBarkingFilter(false);
    //         setProtectivenessFilter(false);
    //     }
    //     setTrainabilityFilter(val);
    //     setFilterWord('trainability');
    // }

    // //Handle toggle for barking-switch
    // const handleChangeBarking = (val) => {
    //     if(trainabilityFilter || setProtectivenessFilter){
    //         setProtectivenessFilter(false);
    //         setTrainabilityFilter(false);
    //     }
    //     setBarkingFilter(val);
    //     setFilterWord('barking');
    // }

    const previousDog = () => {
        if (dogIndex > 0) {
            setDogIndex((dogIndex - 1 + dogs.length) % dogs.length);
        } else {
            setDogIndex(dogs.length -1)
        }
        console.log(dogIndex)

    };

    const nextDog = () => {
        if (dogIndex < dogs.length - 1) {
            setDogIndex((dogIndex + 1) % dogs.length);
        } else{
            setDogIndex(0)
        }
        console.log(dogIndex)
    }

    return (
        <>
            <>
                <div className="description-section">
                        <h4>Sök hund efter dina krav</h4>
                        <p>Fyll i nedanstånde parametrar för att se hundar som matchar dina krav.</p>
                    </div>
                <div className="search-section">
                    {/* <div className="filter-section">
                        <p>Träningsbarhet (1-5)</p>
                        <ReactSwitch className="switch"
                            checked={trainabilityFilter}
                            onChange={handleChangeTrainability}
                        />
                        <p>Skyddsförmåga (1-5)</p>
                        <ReactSwitch className="switch"
                            checked={protectivenessFilter}
                            onChange={handleChangeProtectiveness}
                        />
                        <p>Skällande (1-5)</p>
                        <ReactSwitch className="switch"
                            checked={barkingFilter}
                            onChange={handleChangeBarking}
                        />
                    </div> */}
                    <form onSubmit={(e) => {e.preventDefault(); handleClick();}}>

                        
                        <div className="tooltip-container">
                            <span className="question-mark">Skällande:</span>
                            <div className="tooltip">
                                How vocal the breed is. 1 indicates minimal barking and 5 indicates maximum barking
                            </div>
                        </div>

                        <input 
                            className="search-box"
                            type="number"
                            min={0}
                            max={5}
                            placeholder="1-5"
                            value={barking}
                            onChange={(e) => setBarking(e.target.value)}
                        />
                        
                        <div className="tooltip-container">
                            <span className="question-mark">Hårfällande:</span>
                            <div className="tooltip">
                                How much hair the breed sheds. 1 indicates no shedding and 5 indicates maximum shedding.
                            </div>
                        </div>

                        <input 
                            className="search-box"
                            type="number"
                            min={0}
                            max={5}
                            placeholder="1-5"
                            value={shedding}
                            onChange={(e) => setShedding(e.target.value)}
                        />
                        
                        <div className="tooltip-container"> 
                            <span className="question-mark">Energi:</span>
                            <div className="tooltip">
                                How much energy the breed has. 1 indicates low energy and 5 indicates high energy.
                            </div>
                        </div>

                        <input 
                            className="search-box"
                            type="number"
                            placeholder="1-5"
                            min={0}
                            max={5}
                            value={energy}
                            onChange={(e) => setEnergy(e.target.value)}
                        />

                        <div className="tooltip-container">
                            <span className="question-mark">Skyddsamhet:</span>
                            <div className="tooltip">
                                How likely the breed is to alert strangers. 1 indicates minimal alerting and 5 indicates maximum alerting.
                            </div>
                        </div>

                        <input 
                            className="search-box"
                            type="number"
                            min={0}
                            max={5}
                            placeholder="1-5"
                            value={protectiveness}
                            onChange={(e) => setProtectiveness(e.target.value)}
                        />

                        <div className="tooltip-container">
                            <span className="question-mark">Träningsbarhet:</span>
                            <div className="tooltip">
                                How easy it is to train the breed. 1 indicates the breed is very difficult to train and 5 indicates the breed is very easy to train.
                            </div>
                        </div>

                        <input 
                            className="search-box"
                            type="number"
                            min={0}
                            max={5}
                            placeholder="1-5"
                            value={trainability}
                            onChange={(e) => setTrainability(e.target.value)}
                        />
                        <button
                        className="search-button">
                            Sök hundar!</button>
                    </form>
                </div>

                {dogs.length > 0 ? 
                    <>
                        <div className="container">
                            <div className="dog-img">
                                <img src={dogs[dogIndex].image_link} alt="Dog pic" />
                            </div>
                             <div className="dog-info">
                                <h3>{dogs[dogIndex].name}</h3>
                                <p>Skällande: {dogs[dogIndex].barking}</p>
                                <p>Hårfällande: {dogs[dogIndex].shedding}</p>
                                <p>Energi: {dogs[dogIndex].energy}</p>
                                <p>Skyddsamhet: {dogs[dogIndex].protectiveness}</p>
                                <p>Träningsbarhet: {dogs[dogIndex].trainability}</p>
                                <p></p>

                             </div>
                        </div>
                        
                        <div className="pagination-section">
                            <button className="pagination-button" onClick={previousDog}>Föregående</button>
                            <button className="pagination-button" onClick={nextDog}>Nästa</button>
                        </div>
                    </> : (null)
                } 
            </>
        </>
    )
}

export default DogComponent;