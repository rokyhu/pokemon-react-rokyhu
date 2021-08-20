import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import GitHub from './GitHub';

export default class PageHeader extends React.Component {

    render() {
        return (
            <div className="App-header">
                <Logo />
                <div>
                    <Link className="NavItem" to="/pokemons">Pokemons</Link>
                    <Link className="NavItem" to="/types">Types</Link>
                    <Link className="NavItem" to="/about">About</Link>
                </div>
                <GitHub />
            </div>
        )
    }
}