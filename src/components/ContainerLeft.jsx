import { useEffect, useState } from "react"
import "../css/ContainerLeft.css"

function ContainerLeft() {
    const [phrase, setPhrase] = useState("")

    const phraseMotivation = async () => {
        try {
            const response = await fetch("https://moraislucas.github.io/MeMotive/phrases.json")
            const data = await response.json();

            data.slice(0, 100)
            const numberRandom = Math.floor(Math.random() * data.length)

            setPhrase(data[numberRandom].quote)
        } catch (error) {
            setPhrase("Ops.. erro ao gerar uma nova frase.")
        }
    }

    useEffect(() => {
        phraseMotivation()
    }, [])

    return (
        <div>
            <div className="container">
                <div className="title">
                    <img src="src/assets/star-one.svg" alt="um grupo de 3 estrelinha e 1 estrela" />
                    <h2>Frase <span>Motivacional</span></h2>
                </div>

                <div className="phrase-motivation">
                    <p>
                        {phrase}
                    </p>
                </div>

                <div className="button-group">
                    <button className="refresh" type="button" onClick={phraseMotivation} title="Gerar nova frase"><img src="src/assets/refresh.svg" alt="" /></button>
                    <button className="heart" type="button" title="Favoritar a frase"><img src="src/assets/heart.svg" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default ContainerLeft