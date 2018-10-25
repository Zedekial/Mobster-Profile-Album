import React, { Component } from 'react';
import CardComponentContainer from './components/CardComponentContainer';
// import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The fantastic Mobster Photo Album - v.033a</h1>
        <CardComponentContainer src="/test" name="Irina Nicula" phone="xxx" role="xxx" email="email@xxx"></CardComponentContainer>
      </div>
    );
  }
}

export default App;
