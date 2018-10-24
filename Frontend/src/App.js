import React, { Component } from 'react';
import './CSS/App.css';
import HeaderComponent from './components/HeaderComponent';

class App extends Component {
  constructor(){
    super();
    this.state = {
      auth: 0
  }
  
  }
  render() {
    return (
      <div className="App">
       <HeaderComponent />
        <h1>The fantastic Mobster Photo Album - v.033a</h1>
      </div>
    );
  }
}

export default App;
