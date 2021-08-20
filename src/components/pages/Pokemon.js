import React from 'react';
import axios from 'axios';
import imgPlaceholder from '../../images/image_placeholder.jpg';

export default class Pokemon extends React.Component {

    state = {
        pokemonDetails: null
    }

    componentDidMount() {
        const url = this.props.pokemon.url
        axios.get(url)
        .then(res => this.setState({pokemonDetails: res.data}))
    }
    
    
    render() {
        if (!this.state.pokemonDetails) {
            return <div className="PokemonCard">
                <img
                    src={imgPlaceholder}
                    alt='Loading...'
                    width="96"
                    height="96">
                </img>
                <h6>Loading...</h6>
            </div>
        }
        return (
            <div className="Card">
                <img
                    src={this.state.pokemonDetails.sprites.front_default}
                    alt={this.state.pokemonDetails.name}
                    width="96"
                    height="96">
                </img>
                <h6>{this.state.pokemonDetails.name}</h6>
            </div>
        )
    }
}
