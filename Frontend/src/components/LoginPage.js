import React, { Component } from 'react'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import App from '../App'

class LoginPage extends Component {
  constructor() {
    super();
    this.state = { redirectToReferrer: false }
    this.login = this.login.bind(this);
  }
  login() {
    fakeAuth.authenticate(() => { this.setState({ redirectToReferrer: true }) })
    }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;

 if (redirectToReferrer) {
  return ( <Redirect to={from} />  ) }
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={
          (e)=>e.preventDefault()
        }>
            <input id='loginField' name="login" placeholder="login"></input>
            <input name="password" placeholder="password"></input>
            <button type="submit" onClick={ this.login }>Login</button>
        </form>
      </div>
    )
  }
}

const readField = () => {
  console.log('hello readField');
}

export const fakeAuth = {
  isAuthenticated: false, authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) },
 }
 export default LoginPage;


 // var loginName = 'admin';
 // var input_value = document.getElementById('loginField').value;
 // console.log(input_value);
 //  if (input_value === loginName) {
 //    console.log(input_value);
 //  }
