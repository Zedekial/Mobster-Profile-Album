import React, { Component } from 'react';
import AddUserButtonComponent from './components/AddUserButtonComponent'
import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddUserButtonComponent mainState={true}/>
      </div>
    );
  }
}

export default App;
