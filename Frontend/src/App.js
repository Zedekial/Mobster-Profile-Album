import React, { Component } from 'react';
import './CSS/App.css';
import HeaderComponent from './components/HeaderComponent';
import LoginPage from './components/LoginPage'
import { Redirect, Link, Route, Switch } from 'react-router-dom';


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
      
       <Switch>
       <Route path="/login" component={LoginPage}/>
       <Route exact path="/" component={HeaderComponent} />
       </Switch>
       {/* <LoginPageComponent /> */}
        
      </div>
    );
  }
}

export default App;
