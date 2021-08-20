import './style/App.css';
import MainContainer from './components/MainContainer';
import React from 'react';

export default class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
  
}