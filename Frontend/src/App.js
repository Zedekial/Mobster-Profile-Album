import React, { Component } from 'react';
import './CSS/App.css';
import HeaderComponent from './components/HeaderComponent';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import {Admin, PrivateRoute} from './components/PrivateRouteComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      LoggedIn: false
  }
  this.updateLoginState = this.updateLoginState.bind(this);
}

  MyLoginPage = (props) => {
  return (
    <LoginPage 
      updateLoginState={this.updateLoginState}
      {...props} mainState={this.state}
    />
  );
  }

  updateLoginState() {
    this.setState({LoggedIn: !this.state.LoggedIn});
    setTimeout(()=>
    {
    console.log(this.state.LoggedIn);
    },500)
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent 
          mainState={this.state} 
          updateLoginState={this.updateLoginState}
        />
        <Switch>
        <Route path="/login" render={this.MyLoginPage} />
        {/* <Route exact path="/" component={HeaderComponent} /> */}
        <PrivateRoute path='/admin' component = {Admin} />
        </Switch>
      </div>
    );
  }
}

export default App;
