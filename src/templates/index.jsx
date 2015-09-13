import React from 'react'
import Header from '../modules/header'
import Footer from '../modules/footer'
import Preview from '../modules/preview'
import Sidebar from '../modules/sidebar'

class Index extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <Preview />
                    <Sidebar />
                </div>
                <Footer />
            </div>
        )
    }
}

React.render(
    <Index />,
    document.body);
