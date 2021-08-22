import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import GitHub from './GitHub';

const AppHeader = styled.div`
        padding: 10px 20px;
        /* background-color: rgba(36, 28, 28, 0.6); */
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: left;
        font-size: calc(10px + 2vmin);
        color: white;
    `

export default function PageHeader() {

    return (
        <AppHeader>
            <Logo />
            <div>
                <Link className="NavItem" to="/pokemons">Pokemons</Link>
                <Link className="NavItem" to="/types">Types</Link>
                <Link className="NavItem" to="/about">About</Link>
            </div>
            <GitHub />
        </AppHeader>
    )
}