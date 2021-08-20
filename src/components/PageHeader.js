import React from 'react'
import NavBar from './NavBar'

export default class PageHeader extends React.Component {

    state = {
        menuItems: [
            {
                id: 1,
                title: "Pokemons",
                url: "./pokemons"
            },
            {
                id: 2,
                title: "Types",
                url: "./types"
            }
        ]
    }

    render() {
        return (
            <div className="App-header">
                <NavBar menuItems={this.state.menuItems}/>
            </div>
        )
    }
}