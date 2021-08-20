import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
    render() {
        return (
            <Link to="/" className="NoBorder">
                <div className="AppLogo"></div>
            </Link>
        )
    }
}
