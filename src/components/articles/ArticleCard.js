import React from "react"
import PropType from "prop-types"


const ArticleCard = ({article, deleteArticle}) => {
        return (
            <div id={`article--${article.id}`} className="card article-card">
                <div className="card-body">
                    <h4 className="card-title">{article.title}</h4>
                    <p>{article.description}</p>
                    <a href={article.URL}>{article.title}</a>
                    <p>{article.date}</p>
                        <button
                            onClick={() => deleteArticle("articles", article.id)}
                            className="card-link">Delete Article
                        </button>
                    </div>
            </div>
        )
}

ArticleCard.propTypes = {
    article: PropType.shape({
        title: PropType.string.isRequired,
        description: PropType.string.isRequired,
        URL: PropType.string,
        date: PropType.string.isRequired,
        userId: PropType.number.isRequired
        })
}

export default ArticleCard