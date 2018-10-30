import React, { Component } from 'react';
import './CSS/App.css';
import HeaderComponent from './components/HeaderComponent';
import CardGridComponent from './components/CardGridComponent'
import LoginPage, { fakeAuth } from './components/LoginPage'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import FooterComponent from './components/FooterComponent';

/* From login/header branch */
const Admin = () => (<div> <h2>I am in GOD MODE ADMIN</h2> </div>)

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />} />
  )
}
/* ^From login/header branch^ */


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      filteredMobsterData: [],
      searching: false,
      LoggedIn: false,
      LoggingIn: false,
    }
  }

  CardGridComponentWithProps = () => {
    return (
      <CardGridComponent
        list={this.state.searching ?
          this.state.filteredMobsterData :
          this.state.data}
      />
    )
  }

  /* From login/header branch */
  MyLoginPage = (props) => {
    return (
      <LoginPage
        UpdateLoginState={this.UpdateLoginState}
        {...props} state={this.state}
      />
    );
  }

  UpdateLoginState = () => {
    if (this.state.LoggedIn === false) {
      this.setState({
        LoggedIn: true,
        LoggingIn: false,
      });
    } else {
      this.setState({ LoggedIn: false });
    }
  }

  UpdateLoggingIn = () => {
    this.setState({ LoggingIn: true })
  }
  /* ^From login/header branch^ */


  SearchComponentCallBack = (filteredMobsters, searching) => {
    switch (filteredMobsters) {
      case null:
      case []:
        this.setState({
          searching: searching,
        })
        break;
      case undefined:
        break;
      default:
        this.setState({
          filteredMobsterData: filteredMobsters,
          searching: searching,
        })
        break;
    }
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/hqo8c')
      .then(response => {
        this.setState({
          data: response.data,
          loading: false,
        })
      })
      .catch(err => {
        console.log(`Data failed to fetch`)
      })
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent
          state={this.state}
          SearchComponentCallBack={this.SearchComponentCallBack}
          UpdateLoginState={this.UpdateLoginState}
          UpdateLoggingIn={this.UpdateLoggingIn}
        />
        <Switch>
          <Route exact path='/' render={this.CardGridComponentWithProps} />
          <Route path="/login" render={this.MyLoginPage} />
          <PrivateRoute path='/admin' component={Admin} />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}



export default App;
