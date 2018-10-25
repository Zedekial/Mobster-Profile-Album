import React, { Component } from 'react';
import CardComponentContainer from './components/CardComponentContainer';
// import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The fantastic Mobster Photo Album - v.033a</h1>
        <CardComponentContainer src="https://vignette.wikia.nocookie.net/simpsons/images/e/ed/Lisa-Simpson-icon-1.png/revision/latest?cb=20170628205647" name="Lisa Simpson" phone="xxx" role="xxx" email="email@xxx"></CardComponentContainer>
      </div>
    );
  }
}

export default App;
