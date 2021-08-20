import React, { Component } from 'react'
import NavItem from './NavItem'

export default class NavBar extends Component {

    render() {
        return this.props.menuItems.map((item) => (
            <NavItem item={item} />
        ));
    }
}
