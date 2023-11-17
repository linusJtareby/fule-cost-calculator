
function SoundComponent() {
    
    const dogSound = new Audio("resources/dog-sound.mp3")
    const catSound = new Audio("resources/cat-sound.mp3")
    const elephantSound = new Audio("resources/elephant-sound.mp3")
    const horseSound = new Audio("resources/horse-sound.mp3")

    const playDog = () => {
        dogSound.play()
    }

    const playCat = () => {
        catSound.play()
    }

    const playHorse = () => {
        horseSound.play()
    }

    const playElephant = () => {
        elephantSound.play()
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <h1>See what happens when you press te pictures!</h1>
                    <div onClick={playCat}>
                        <img src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" alt="Cat-img"/>
                    </div>
                    <div onClick={playDog}>
                        <img src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg" alt="dog-img"/>
                    </div>
                    <div onClick={playHorse}>
                        <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvZnJob3JzZV9nYWxsb3BfY2FudGVyX21hcmUtaW1hZ2Utcm01MDNfMS1sMDd0dW5iZy5qcGc.jpg" alt="horse-img" />
                    </div>
                    <div onClick={playElephant}>
                        <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_640,f_auto/MA_00000006_fwj0rh.jpg" alt="Elephant-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoundComponent;