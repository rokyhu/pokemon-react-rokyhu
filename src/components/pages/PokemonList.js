import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';


export default function PokemonList(props) {

    const [pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    
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


    const goToPreviousPokemons = (e) => {
        if (pokemonList.previous) {
            setPokemonUrl(pokemonList.previous) 
        }
    }

    const goToNextPokemons = (e) => {
        if (pokemonList.next) {
            setPokemonUrl(pokemonList.next) 
        }
    }
    
    return (
        <>
            <div className={`"CardNavigation " + ${!pokemonList.previous ? "VisibilityHidden" : ""}`}>
                <button className="btn" onClick={goToPreviousPokemons}>Previous</button>
            </div>
            <div className="CardContainer">
                {pokemonList.results.map((pokemon) => (
                    
                    <PokemonCard key={pokemon.url} pokemon={pokemon} />
                ))}
            </div>
            <div className={`"CardNavigation " + ${!pokemonList.next ? "VisibilityHidden" : ""}`}>
                <button className="btn" onClick={goToNextPokemons}>Next</button>
            </div>
        </>
        )
}
