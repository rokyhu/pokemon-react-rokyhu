import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default function NavItem(props) {
    return (
        <a href={props.item.url}>
            <h4 className="NavItem">
                {this.props.item.title}
            </h4>
        </a>
    )
}

// PropTypes
NavItem.propTypes = {
    item: PropTypes.object.isRequired
}
