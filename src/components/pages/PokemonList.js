import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';


export default function PokemonList(props) {

    const [pokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    
    const [pokemonList, setPokemonList] = useState({
        count: 0,
        next: null,
        previous: null,
        results: []
    });

    useEffect(() => {
        axios.get(pokemonUrl)
        .then(res => setPokemonList(res.data))
    }, [pokemonUrl]);
    
    return (
        <>
            {/* <div className="CardNavigation">
                <button className="btn">Previous</button>
            </div> */}
            <div className="CardContainer">
                {pokemonList.results.map((pokemon) => (
                    
                    <Pokemon key={pokemon.url} pokemon={pokemon} />
                ))}
            </div>
            {/* <div className="CardNavigation">
                <button className="btn">Next</button>
            </div> */}
        </>
        )
}
