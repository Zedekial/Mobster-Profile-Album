import React, { Component } from 'react'
// import { Redirect, Link, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import MainPage from '../MainPage';
// import App from '../App'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      inputValue: ''
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    const dlogin = 'admin';
    const dpassword = 'admin';
    let login = e.target.login.value;
    let password = e.target.password.value;

    if (dlogin === login && dpassword === password) {
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true })
      });
      this.props.UpdateLoginState();


    } else {
      document.getElementById('myForm').reset();
      console.log('wrong password');
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return (<Redirect to={from} />)
    }
    return (
      <div>
        <h1>Login Page</h1>
        <form id="myForm" onSubmit={this.handleLogin}>
          <input type="text" name="login" placeholder="login" ref="login"></input>
          <input type="password" name="password" placeholder="password" ref="password"></input>
          <button type="submit" value="submit">Login</button>

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
