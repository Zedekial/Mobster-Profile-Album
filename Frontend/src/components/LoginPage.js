import React, { Component } from 'react'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import App from '../App'

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
      inputValue: ''
     }
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(e) {
    e.preventDefault();
    let login = e.target.login.value;
    let password = e.target.password.value;
    const  dlogin = 'admin';
    const dpassword = 'admin';
    if (dlogin == login && dpassword == password){
   fakeAuth.authenticate(() => { this.setState({ redirectToReferrer: true }) })

    } else {

      document.getElementById('myForm').reset();



      console.log('wrong password');



    }
    }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;    
 if (redirectToReferrer) {
  return ( <Redirect to={from} /> ) }
    return (
      <div>
        <h1>Login Page</h1>
        <form id="myForm" onSubmit={this.handleLogin.bind(this)}>
            <input name="login" placeholder="login" ></input>
            <input type="password" name="password" placeholder="password" ></input>
            <button type="submit" value="submit">Login
     </button>
        </form>
      </div>
    )
  }
}

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
   },
 }
 export default LoginPage;
