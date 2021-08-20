import React from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';


export default class PokemonList extends React.Component {

    state = {
        pokemonList: {
            count: 0,
            next: null,
            previous: null,
            results: []
        }
      }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => this.setState({pokemonList: res.data}))
    }
    
    render() {
        return (
            <>
                <div className="CardNavigation">
                    <button className="btn">Previous</button>
                </div>
                <div className="CardContainer">
                    {this.state.pokemonList.results.map((pokemon) => (
                        <Pokemon key={pokemon.url} pokemon={pokemon} />
                    ))}
                </div>
                <div className="CardNavigation">
                    <button className="btn">Next</button>
                </div>
            </>
        )
    }
}
