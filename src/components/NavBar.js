import React, { Component } from 'react';
import NavItem from './NavItem';
import PropTypes from 'prop-types';

export default class NavBar extends Component {

    render() {
        return this.props.menuItems.map((item) => (
            <NavItem key={item.id} item={item} />
        ));
    }
}

// PropTypes
NavBar.propTypes = {
    menuItems: PropTypes.array.isRequired    
}
