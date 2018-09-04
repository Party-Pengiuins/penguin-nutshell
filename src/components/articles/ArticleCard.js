import React from "react"
import PropType from "prop-types"


const AnimalCard = ({article, deleteArticle}) => {
        return (
            <div key={animal.id} className="card animal-card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={dog} alt="pupper" className="icon--dog" />
                        {animal.name}
                        <button
                            onClick={() => deleteArticle(article.id)}
                            className="card-link">Discharge</button>
                    </h5>
                    </div>
            </div>
        )
}

AnimalCard.propTypes = {
    article: PropType.shape({
        title: PropType.string.isRequired,
        description: PropType.string.isRequired,
        url: PropType.number.isRequired,
        date: PropType.number.isRequired,
        userId: PropType.number.is
        })
}

export default AnimalCard