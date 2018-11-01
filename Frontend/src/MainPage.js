import React, { Component } from 'react';
import './CSS/MainPage.css';
import HeaderComponent from './components/HeaderComponent';
import CardGridComponent from './components/CardGridComponent';
import LoginPage, { fakeAuth } from './components/LoginPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import AddEditFormComponent from './components/AddEditFormComponent';
import FooterComponent from './components/FooterComponent';
import { DisplayStatusInfoWindow } from './components/DisplayStatusInfoComponent';

/* Font Awesome imports */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
/* You must import your icon below this line  */
import { faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faPlus);

/*
^ To add an icon to the library add it in the import above, ^
then add it to the library

First use this link to import the library in your app ->
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

Then if you wish to use the icon in the library you use this format
<FontAwesomeIcon icon="coffee" />
*/

/* ^Font Awesome imports^ */

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
      displayMessage: 'loading',
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

  componentWillMount() {
    axios.get('https://api.myjsn.com/bins/msk5m')
    .then(response => {
      this.setState({
        data: response.data,
        loading: false,
        displayMessage: '',
      })
    })
    .catch(err => {
      this.setState({ displayMessage: 'error' })
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
    {
      this.state.loading &&
      <DisplayStatusInfoWindow
      state={this.state}
      />
    }
    <Switch>

      <Route exact path='/' render={this.CardGridComponentWithProps} />
      <Route path="/login" render={this.MyLoginPage} />
      <Route path="/add" component={AddEditFormComponent} />
      <PrivateRoute path='/admin' component={Admin} />
    </Switch>
    <FooterComponent />
    </div>
    );
  }
}



export default App;
