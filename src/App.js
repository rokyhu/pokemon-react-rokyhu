import './style/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import About from './components/pages/About';
import PokemonList from './components/pages/PokemonList';
import TypeList from './components/pages/TypeList';
import PokemonDetail from './components/pages/PokemonDetail';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <PageHeader />

          <div className="App-body">


            <Switch>
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <div>
                    <h3>“There's no sense in going out of your way to get somebody to like you.” – Ash</h3>
                  </div>
                </React.Fragment>
              )} />

              <Route path="/pokemons" component={PokemonList} />

              <Route path="/types" component={TypeList} />

              <Route path="/about" component={About} />
              
              <Route path="/pokemon-detail" component={PokemonDetail} />

            </Switch>

          </div>
          
          <PageFooter />
        </div>
      </Router>
    );
  }
  
}