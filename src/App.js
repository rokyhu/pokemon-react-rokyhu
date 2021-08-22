import './style/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import About from './components/pages/About';
import PokemonList from './components/pages/PokemonList';
import TypeList from './components/pages/TypeList';
import PokemonDetail from './components/pages/PokemonDetail';

export default function App(props) {

  return (
    <Router>
      <div className="App">
        <PageHeader />

        <div className="App-body">


          <Switch>
            <Route exact path="/" render={props => (
              <>
                  <div>
                    <h3>“Even if you lose in battle, if you surpass what you’ve done before, you have bested yourself."</h3>
                    <br></br>
                    <h5>– Marshall</h5>
                    <br></br>
                    <p>SELECT A MENU OPTION TO GET STARTED.</p>
                  </div>
              </>
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