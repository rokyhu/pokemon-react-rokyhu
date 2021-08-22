import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import imgPlaceholder from '../../images/image_placeholder.jpg';

export default function Pokemon(props) {

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
        <div className="Card">
            <img
                src={isDataPresent ? pokemonDetails.sprites.front_default : imgPlaceholder}
                alt={isDataPresent ? pokemonDetails.name : 'Loading...'}
                width="96"
                height="96">
            </img>
            <p>{isDataPresent ? pokemonDetails.name : 'Loading...'}</p>
        </div>
        </Link>
    )
}
