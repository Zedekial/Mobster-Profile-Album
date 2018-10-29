import React, { Component } from 'react';
import AddEditFormComponent from './components/AddEditFormComponent';
// import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The fantastic Mobster Photo Album - v.033a</h1>
        <AddEditFormComponent/>
        
      </div>
    );
  }
}

export default App;
