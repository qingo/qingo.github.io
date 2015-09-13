import React from 'react'

export default class Preview extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            articles: [{
                name: '第一篇文章',
                id: 1
            },{
                name: '第二篇文章',
                id: 2
            }]
        }
    }

    render() {
        let articles = [];
        this.state.articles.forEach(article => articles.push(<div>{article.name}</div>));
        return (
            <div>
                {articles}
            </div>
        )
    }
}