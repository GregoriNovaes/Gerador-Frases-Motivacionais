import { useEffect, useState } from "react"
import "../css/ContainerLeft.css"

function ContainerLeft({ addPhrase }) {
    const [phrase, setPhrase] = useState([])

    function favoritedPhrase() {
        const phraseFavorited = {
            id: phrase.id,
            quote: phrase.quote
        }

        addPhrase(phraseFavorited)
    }

    const phraseMotivation = async () => {
        try {
            const response = await fetch("https://moraislucas.github.io/MeMotive/phrases.json")
            const data = await response.json();

            data.slice(0, 100)
            const numberRandom = Math.floor(Math.random() * data.length)

            setPhrase(data[numberRandom])
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
                    <img src="public/icons/star-one.svg" alt="um grupo de 3 estrelinha e 1 estrela" />
                    <h2>Frase <span>Motivacional</span></h2>
                </div>

                <div className="phrase-motivation">
                    <p>
                        {phrase.quote}
                    </p>
                </div>

                <div className="button-group">
                    <button className="refresh" type="button" onClick={phraseMotivation} title="Gerar nova frase"><img src="public/icons/refresh.svg" alt="" /></button>
                    <button className="heart" type="button" onClick={favoritedPhrase} title="Favoritar a frase"><img src="public/icons/heart.svg" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default ContainerLeft