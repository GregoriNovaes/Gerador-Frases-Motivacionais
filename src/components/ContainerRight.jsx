import "../css/ContainerRight.css"

function ContainerRight() {
    return (
        <div>
            <div className="container-right">
                <div className="title-right">
                    <img src="src/assets/star-two.svg" alt="Uma estrela" />
                    <h3>Frases Favoritas</h3>
                </div>

                <div className="list-phrases">
                    <div className="list-empty">
                        <img src="src/assets/clipboard.svg" alt="Uma prancheta" />
                        <p>Você ainda não tem frases favoritadas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerRight