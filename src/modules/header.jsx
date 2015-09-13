import React from 'react'

export default class Header extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            menus: [{
                name: '首页',
                id: 1
            },{
                name: '分类',
                id: 2
            }]

        }
    }

    render() {
        let menus = [];
        this.state.menus.forEach(menu => menus.push(<div>{menu.name}</div>));
        return (
            <div>
                {menus}
            </div>
        );
    }
}