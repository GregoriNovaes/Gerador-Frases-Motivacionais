import "../css/ContainerLeft.css"

function ContainerLeft() {
    return (
        <div>
            <div className="container">
                <div className="title">
                    <img src="src/assets/star-one.svg" alt="um grupo de 3 estrelinha e 1 estrela" />
                    <h2>Frase <span>Motivacional</span></h2>
                </div>

                <div className="phrase-motivation">
                    <p>
                        É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota
                    </p>
                </div>

                <div className="button-group">
                    <button type="button" title="Gerar nova frase"><img src="src/assets/refresh.svg" alt="" /></button>
                    <button type="button" title="Favoritar a frase"><img src="src/assets/heart.svg" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default ContainerLeft