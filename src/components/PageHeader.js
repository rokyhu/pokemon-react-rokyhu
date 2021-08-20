import React from 'react'
import NavBar from './NavBar'
import Logo from './Logo'

export default class PageHeader extends React.Component {

    render() {
        return (
            <div className="App-header">
                <Logo />
                <NavBar menuItems={this.props.menuItems}/>
            </div>
        )
    }
}