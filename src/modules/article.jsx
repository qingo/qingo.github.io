import React from 'react'
import marked from 'marked'
import Art from '../stores/article'

export default class Article extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            content: ''
        }
    }

    render() {
        return (
            <div>
                {this.state.content}
            </div>
        )
    }

    componentDidMount() {
        let art = new Art(this.props.article);
        art.get().then(content => this.setState({content: marked(content)}))
    }
}