import React from 'react'
import Header from '../modules/header'
import Footer from '../modules/footer'
import Article from '../modules/article'
import Sidebar from '../modules/sidebar'

class Detail extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            article: {
                id: 0,
                url: ''
            }
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Article article={this.state.article}/>
                <Footer />
            </div>
        )
    }
}

React.render(
    <Detail />,
    document.body);
