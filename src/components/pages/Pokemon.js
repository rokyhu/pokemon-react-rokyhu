import React from 'react'

export default class Pokemon extends React.Component {
    render() {
        return (
            <div className="PokemonCard">
                <p>
                    {this.props.pokemon.name}
                </p>
            </div>
        )
    }
}
