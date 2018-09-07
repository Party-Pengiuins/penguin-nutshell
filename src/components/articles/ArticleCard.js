import React from "react"
import PropType from "prop-types"
import { Button } from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faTrashAlt)

const ArticleCard = ({article, deleteArticle}) => {

    // this.state = {
    //     URL: article.URL
    // }
    // // An if statement for the user input:
    // // If the user's URL includes the 'https://', send the user to the URL
    // if(this.state.URL.includes("https://")){
    //     return (
    //         <div id={`article--${article.id}`} className="card article-card">
    //             <div className="card-body">
    //                 <h4 className="card-title">{article.title}</h4>
    //                 <p>{article.description}</p>
    //                 <a href={`${article.URL}`}>{article.title}</a>
    //                     <div className="article-footer">
    //                     <p>{article.date}</p>
    //                         <Button id="delete-article-btn"
    //                             onClick={() => deleteArticle("articles", article.id)}
    //                             className="card-link"><FontAwesomeIcon icon="trash-alt" />
    //                         </Button>
    //                     </div>
    //                 </div>
    //         </div>
    //     )
    // // if the user's URL DOES NOT include the 'https://', add the 'https://' before the URL
    // } else {
        return (
            <div id={`article--${article.id}`} className="card article-card">
                <div className="card-body">
                    <h4 className="card-title">{article.title}</h4>
                    <p>{article.description}</p>
                    <a href={article.URL}>{article.title}</a>
                    <div className="article-footer">
                        <p>{article.date}</p>
                            <Button id="delete-article-btn"
                                    onClick={() => deleteArticle("articles", article.id)}
                                    className="card-link"><FontAwesomeIcon icon="trash-alt" />
                        </Button>
                        </div>
                    </div>
            </div>
        )
    // }
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