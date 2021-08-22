import React, {useState, useEffect} from 'react';
import axios from 'axios';
import imgPlaceholder from '../../images/image_placeholder.jpg';

export default function Type(props) {

    const [typeDetails, setTypeDetails] = useState();
    const [pokemonDetails, setPokemonDetails] = useState();

    useEffect(() => {
        const url = props.type.url
        axios.get(url)
        .then(res => setTypeDetails(res.data))
    }, [props]);

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
        <div className="Card">
            <img
                src={!pokemonDetails ? imgPlaceholder : pokemonDetails.sprites.front_default}
                alt={!pokemonDetails ? 'Loading...' : typeDetails.name}
                width="96"
                height="96">
            </img>
            <p>{!pokemonDetails ? 'Loading...' : typeDetails.name}</p>
        </div>
    )
}