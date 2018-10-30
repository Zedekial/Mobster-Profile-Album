import React, { Component } from 'react';
import './CSS/App.css';
import HeaderComponent from './components/HeaderComponent';
import LoginPage, { fakeAuth } from './components/LoginPage'
import { Redirect, Link, Route, Switch } from 'react-router-dom';

const Admin = () => ( <div> <h2>I am in GOD MODE ADMIN</h2> </div> )

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}

  // make a function for updating mainpage state
  // pass state and function to login page 
  // pass state to loggin button component
  // maybe mid state for loggin buyttton component
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
    if(this.state.LoggedIn === false) {
      this.setState({LoggedIn: true});
    }else{
      this.setState({LoggedIn: false});
    }
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
        {/* <Route path="/login" component={LoginPage} /> */}
        <Route path="/login" render={this.MyLoginPage} />
        {/* <Route exact path="/" component={HeaderComponent} /> */}
        <PrivateRoute path='/admin' component = {Admin} />
        </Switch>
        {/* <LoginPageComponent /> */} 
      </div>
    );
  }
}

export default App;
