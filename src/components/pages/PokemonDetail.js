import React from 'react'
import styled from 'styled-components';

const LargeCard = styled.button`
    width: 600px;
    height: 400px;
    background-color: white;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 10px;
    border: none;
    display: flex;
    align-items: center;
    box-shadow: 3px 3px #eee;
    text-transform: capitalize;
`

const CardRow = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
`

export default function PokemonDetail(props) {
    
    const pokemonDetails = props.location.pokemonDetails;

    console.log(pokemonDetails);

    const goBack = () => {
        window.history.back();
    }

    return (
        <>
            <div className="CardNavigation">
                <button className="btn" onClick={goBack}>Back</button>
            </div>
            <LargeCard>
                <CardRow>
                    <img
                    src={pokemonDetails.sprites.front_default}
                    alt={pokemonDetails.name}
                    width="200"
                    height="200">
                    </img>
                    <h1>{pokemonDetails.name}</h1>
                </CardRow>
                <CardRow>
                    <h5>{`Main type: ${pokemonDetails.types[0].type.name}`}</h5>
                    <h5>{`Weight: ${pokemonDetails.weight}`}</h5>
                    <h5>{`Height: ${pokemonDetails.height}`}</h5>
                </CardRow>
            </LargeCard>
            <div className="CardNavigation VisibilityHidden">
                <button className="btn">Next</button>
            </div>
        </>
    )
}
