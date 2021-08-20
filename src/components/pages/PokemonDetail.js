import React from 'react'

export default class PokemonDetail extends React.Component {
    
    
    render() {

        const pokemonDetails = this.props.location.pokemonDetails;
        console.log(pokemonDetails);
        return (
            <div>
                <p>{pokemonDetails.name}</p>
                <p>{pokemonDetails.id}</p>
                <p>{pokemonDetails.order}</p>
            </div>
        )
    }
}
