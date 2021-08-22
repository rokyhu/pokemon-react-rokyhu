import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link to="/" className="NoBorder">
            <div className="AppLogo"></div>
        </Link>
    )
}
