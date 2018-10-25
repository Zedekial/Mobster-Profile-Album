import React, { Component } from 'react'

export default class LoginPageComponent extends Component {
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form>
            <input name="login" placeholder="login"></input>
            <input name="password" placeholder="password"></input>
            <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
