import "../css/ContainerRight.css"
import FavoritePhrase from "./FavoritePhrase"

function ContainerRight({data, remove}) {

    return (
        <div>
            <div className="container-right">
                <div className="title-right">
                    <img src="/icons/star-two.svg" alt="Uma estrela" />
                    <h3>Frases Favoritas</h3>
                </div>

                <div className="list-phrases">
                    {
                        data.length == 0 ? (
                            <div className="list-empty">
                                <img src="/icons/clipboard.svg" alt="Uma prancheta" />
                                <p>Você ainda não tem frases favoritadas.</p>
                            </div>
                        ) : (
                            data.map((p, index) => {
                                return <FavoritePhrase key={index} data={p} deletePhrase={remove} />
                            })
                        )
                    }

                    
                </div>
            </div>
        </div>
    )
}

export default ContainerRight