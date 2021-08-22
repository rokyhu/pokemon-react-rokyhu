import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import imgPlaceholder from '../../images/image_placeholder.jpg';

export default function TypeCard(props) {

    const [typeDetails, setTypeDetails] = useState();
    const [pokemonDetails, setPokemonDetails] = useState();

    useEffect(() => {
        const url = props.type.url
        axios.get(url)
        .then(res => setTypeDetails(res.data))
    }, [props]);

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

    const getExamplePokemonDetails = () => {
        const examplePokemons = typeDetails.pokemon[0];
        if (examplePokemons) {
            const examplePokemonUrl = typeDetails.pokemon[0].pokemon.url
            axios.get(examplePokemonUrl)
            .then(res => setPokemonDetails(res.data))
        }
    };
    
    if (typeDetails) {
        getExamplePokemonDetails();
    }

    return (
        <Card>
            <img
                src={!pokemonDetails ? imgPlaceholder : pokemonDetails.sprites.front_default}
                alt={!pokemonDetails ? 'Loading...' : typeDetails.name}
                width="96"
                height="96">
            </img>
            <p>{!pokemonDetails ? 'Loading...' : typeDetails.name}</p>
        </Card>
    )
}