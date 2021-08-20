import React, { Component } from 'react'

export default class NavItem extends Component {
    render() {
        return (
            <a Href={this.props.item.url}><h4 className="NavItem">{this.props.item.title}</h4></a>
        )
    }
}
