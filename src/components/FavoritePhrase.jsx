import "../css/FavoritePhrase.css"

function FavoritePhrase({data, deletePhrase}) {
    const remove = () => {
        deletePhrase(data.id)
    }

    return (
        <div className="favoritePhrase">
            <div className="label">
                <img src="public/icons/circle.svg" alt="" />
                <p>{data.quote}</p>
            </div>
            <button className="delete" type="button" title="Apagar" onClick={remove}></button>
        </div>
    )
}

export default FavoritePhrase