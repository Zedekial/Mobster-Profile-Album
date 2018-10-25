import React, { Component } from 'react';
import CardGridComponent from './components/CardGridComponent';
// import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The fantastic Mobster Photo Album - v.033a</h1>
        <CardGridComponent />
      </div>
    );
  }
}

export default App;
