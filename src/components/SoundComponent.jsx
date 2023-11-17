
function SoundComponent() {
    
    let dogSound = new Audio("resources/dog-sound.mp3")
    let catSound = new Audio("resources/cat-sound.mp3")
    
    const playDog = () => {
        dogSound.play()
    }

    const playCat = () => {
        catSound.play()
        console.log(dogSound)
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    HEJ
                    <div onClick={playCat}>
                        <img src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" alt="Cat-img"/>
                    </div>
                    <div onClick={playDog}>
                        <img src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg" alt="dog-img"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoundComponent;