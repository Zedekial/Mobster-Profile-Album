import React, { Component } from 'react';
import CardGridComponent from './components/CardGridComponent';
import dataTest from './components/dataTest.json';
// import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The fantastic Mobster Photo Album - v.033a</h1>
        <CardGridComponent list={dataTest}/>
      </div>
    );
  }
}

export default App;
