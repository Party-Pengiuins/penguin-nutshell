import React, { Component } from "react"


export default class ArticleList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="articles-list-container">
                <section className="article-cards-container">
                {
                    this.props.articles.map(article =>
                        <div key={article.id} id={`article--${article.id}`} className="card article-card">
                            <div className="card-body">
                                <h4 className="card-title">{article.title}</h4>
                                <p>{article.description}</p>
                                <a href={article.URL}>{article.title}</a>
                                <p>{article.date}</p>
                                </div>
                        </div>
                    )
                }
                </section>
                </div>
            </React.Fragment>
        )
    }
}