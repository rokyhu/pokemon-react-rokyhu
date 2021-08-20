import './style/App.css';
import MainContainer from './components/MainContainer';
import React from 'react';

export default class App extends React.Component {
  
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
      <div className="App">
        <MainContainer menuItems={this.state.menuItems}/>
      </div>
    );
  }
  
}