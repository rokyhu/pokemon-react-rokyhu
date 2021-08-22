import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import imgPlaceholder from '../../images/image_placeholder.jpg';


const Card = styled.button`
        width: 240px;
        height: 96px;
        background-color: white;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        border: none;
        display: flex;
        align-items: center;
        box-shadow: 3px 3px #eee;
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
            box-shadow: 3px 3px #aaa;
        }
    `

export default function PokemonCard(props) {

    const [pokemonDetails, setPokemonDetails] = useState();

    useEffect(() => {
        const url = props.pokemon.url
        axios.get(url)
        .then(res => setPokemonDetails(res.data))
    }, [props]);
    

    const isDataPresent = pokemonDetails != null;
    const pokemonId = isDataPresent ? pokemonDetails.id : null
        
    return (
        <Link to={{
            pathname: `/pokemon-detail/${pokemonId}`,
            pokemonDetails: pokemonDetails
        }}>
            <Card>
                <img
                    src={isDataPresent ? pokemonDetails.sprites.front_default : imgPlaceholder}
                    alt={isDataPresent ? pokemonDetails.name : 'Loading...'}
                    width="96"
                    height="96">
                </img>
                <p>{isDataPresent ? pokemonDetails.name : 'Loading...'}</p>
            </Card>
        </Link>
    )
}
