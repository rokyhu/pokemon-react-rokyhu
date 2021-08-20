import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class NavItem extends Component {
    render() {
        return (
            <a href={this.props.item.url}><h4 className="NavItem">{this.props.item.title}</h4></a>
        )
    }
}

// PropTypes
NavItem.propTypes = {
    item: PropTypes.object.isRequired
}
