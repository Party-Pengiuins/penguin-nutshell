import React, { Component } from "react"
import ArticleCard from "./ArticleCard"

export default class ArticleList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="articles-list-container">
                <h2>Article List</h2>
                <section className="article-cards-container">
                {
                    this.props.articles.map(article =>
                        <ArticleCard key={article.id} article={article} deleteArticle={this.props.deleteArticle} {...this.props} />
                    )
                    
                }
                </section>
                </div>
            </React.Fragment>
        )
    }
}