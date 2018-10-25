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
       <PrivateRoute path='/admin' component = {Admin} />
       </Switch>
       {/* <LoginPageComponent /> */}
        
      </div>
    );
  }
}

export default App;
