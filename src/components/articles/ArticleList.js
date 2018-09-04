import React, { Component } from "react"
import ArticleCard from "./ArticleCard"

export default class ArticleList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="articles-list-container">
                <section className="article-cards-container">
                {
                    this.props.articles.map(article =>
                        <ArticleCard key={article.id} article={article} {...this.props} />
                    )
                    
                }
                </section>
                </div>
            </React.Fragment>
        )
    }
}