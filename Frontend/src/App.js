import React, { Component } from 'react';
import SearchComponent from './components/SearchComponent'
import './CSS/App.css';
import HeaderComponent from './components/HeaderComponent';
import LoginPageComponent from './components/LoginPageComponent'
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
       <LoginPageComponent />
        <h1>The fantastic Mobster Photo Album - v.033a</h1>
        <SearchComponent />
      </div>
    );
  }
}

export default App;
