import React, { Component } from 'react';
import SearchComponent from './components/SearchComponent'
import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The fantastic Mobster Photo Album - v.033a</h1>
        <SearchComponent />
      </div>
    );
  }
}

export default App;
