import React, { Component } from 'react';
import CardComponent from './components/CardComponent';
import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The fantastic Mobster Photo Album - v.033a</h1>
        <CardComponent src="/test" name="Irina Nicula" phone="xxx" role="xxx" email="email@xxx"></CardComponent>
      </div>
    );
  }
}

export default App;
