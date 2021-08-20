import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        const isDataPresent = this.state.pokemonDetails !== null;
        const pokemonId = isDataPresent ? this.state.pokemonDetails.id : null

        return (
            
            <Link to={{
                pathname: `/pokemon-detail/${pokemonId}`,
                pokemonDetails: this.state.pokemonDetails
            }}>
                <div className="Card">
                    <img
                        src={isDataPresent ? this.state.pokemonDetails.sprites.front_default : imgPlaceholder}
                        alt={isDataPresent ? this.state.pokemonDetails.name : 'Loading...'}
                        width="96"
                        height="96">
                    </img>
                    <p>{isDataPresent ? this.state.pokemonDetails.name : 'Loading...'}</p>
                </div>
            </Link>
        )
    }
}
