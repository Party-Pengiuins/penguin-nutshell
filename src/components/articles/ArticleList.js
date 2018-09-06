import React, { Component } from "react"
import ArticleCard from "./ArticleCard"
import AddArticle from "./AddArticle"

export default class ArticleList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="articles-list-container">
                    <div className="add-new-article-btn">
                    <AddArticle addArticle={this.props.addArticle}/>
                    </div>
                <section className="article-cards-container">
                {
                    this.props.articles.map(article =>
                        <ArticleCard key={article.id} article={article} deleteArticle={this.props.deleteArticle}{...this.props} />
                    )
                    
                }
                </section>
                </div>
            </React.Fragment>
        )
    }
}