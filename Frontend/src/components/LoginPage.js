import React, { Component } from 'react';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import LoginFormComponent from './LoginFormComponent';

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
}

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
     }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const dlogin = 'admin';
    const dpassword = 'admin';
    let login = e.target.login.value;
    let password = e.target.password.value;

    if (dlogin == login && dpassword == password){
      fakeAuth.authenticate(() => { 
      this.setState({ redirectToReferrer: true }) 
    });
      this.props.updateLoginState();
    } else {
      e.target.reset();
      console.log('wrong password');
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return ( <Redirect to={from} /> ) }
      return <LoginFormComponent onSubmit={this.handleLogin}/>
  }
}

 export default LoginPage;
