import React from 'react'

export default function PokemonDetail(props) {
    
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
