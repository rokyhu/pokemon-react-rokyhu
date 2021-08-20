import React from 'react';
import axios from 'axios';
import imgPlaceholder from '../../images/image_placeholder.jpg';

export default class Type extends React.Component {

    state = {
        typeDetails: null,
        pokemonDetails: null
    }

    componentDidMount() {
        const url = this.props.type.url
        axios.get(url)
        .then(res => this.setState({typeDetails: res.data}))
    }

    getExamplePokemonDetails() {
        const examplePokemons = this.state.typeDetails.pokemon[0];
        if (examplePokemons) {
            const examplePokemonUrl = this.state.typeDetails.pokemon[0].pokemon.url
            axios.get(examplePokemonUrl)
            .then(res => this.setState({pokemonDetails: res.data}))
        }
    
    }
    
    render() {
        if (!this.state.typeDetails) {
            return <div className="Card">
                <img
                    src={imgPlaceholder}
                    alt='Loading...'
                    width="96"
                    height="96">
                </img>
                <p>Loading...</p>
            </div>
        }

        this.getExamplePokemonDetails();

        return (
            <div className="Card">
                <img
                    src={!this.state.pokemonDetails ? imgPlaceholder : this.state.pokemonDetails.sprites.front_default}
                    // src={imgPlaceholder}
                    alt={this.state.typeDetails.name}
                    width="96"
                    height="96">
                </img>
                <p>{this.state.typeDetails.name}</p>
            </div>
        )
    }
}