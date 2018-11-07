import React, { Component } from 'react';
import './CSS/MainPage.css';
import HeaderComponent from './components/HeaderComponent';
import CardGridComponent from './components/CardGridComponent';
import LoginPage, { fakeAuth } from './components/LoginPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import AddEditFormComponent from './components/AddEditFormComponent';
import FooterComponent from './components/FooterComponent';
import CreateMobsterChunks from './components/LazyLoadingComponent';
import { DisplayStatusInfoWindow } from './components/DisplayStatusInfoComponent';


/* Font Awesome imports */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
/* You must import your icon below this line  */
import { faPlus, faSearch, faUserEdit, faEye, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faPlus, faSearch, faUserEdit, faEye, faSpinner, faTimesCircle);


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
      /* Data used to display and store all mobsters */
      data: [],
      filteredMobsterData: [],
      lazyLoadMobsterData: [],
      mobsterChunks: [],
      mobsterChunkIndex: 0,
      scrolling: false,
      /* ^Data used to display and store all mobsters^ */
      loading: true,
      displayMessage: 'loading',
      errorDetails: '',
      searchText: '',
      searching: false,
      LoggedIn: false,
      LoggingIn: false,
    }
  }

  CardGridComponentWithProps = () => {
    const { filteredMobsterData, loading, lazyLoadMobsterData, searching } = this.state
    return (
      <CardGridComponent
        list={searching ?
          filteredMobsterData :
          (!loading ?
            lazyLoadMobsterData :
            null)
        }
        handleScrollLazyLoad={this.handleScrollLazyLoad}
        state={this.state}
      />
    )
  }

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

  SearchComponentCallBack = (filteredMobsters, searching, searchText) => {
    switch (filteredMobsters) {
      case null:
      case 'no results':
        this.setState({
          searching: searching,
          filteredMobsterData: [],
          searchText: searchText,
          displayMessage: 'no results'
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

  CreateMobsterChunksCallback = (mobsterChunks) => {
    this.setState({
      mobsterChunks: mobsterChunks,
      lazyLoadMobsterData: mobsterChunks[0],
    })
    setTimeout(() => {
      console.log(this.state.chunkIndex)
    }, 200)
  }

  handleScrollLazyLoad = () => {
    const { mobsterChunks, lazyLoadMobsterData, mobsterChunkIndex } = this.state;
    console.log(`${mobsterChunkIndex+1 < mobsterChunks.length}`);
    if (!(mobsterChunkIndex+1 < mobsterChunks.length)) return
    this.setState(prevState => ({
      mobsterChunkIndex: prevState.mobsterChunkIndex+1,
      scrolling: true,
    }), () => {
      let llMobsterDataCopy = lazyLoadMobsterData;
      llMobsterDataCopy.push(...mobsterChunks[this.state.mobsterChunkIndex]);
      console.log(llMobsterDataCopy);
      // console.log(...mobsterChunks)
      this.setState({
        lazyLoadMobsterData: llMobsterDataCopy,
        scrolling: false,
        });

     }
    )
  }

  retryGetMobsterData = () => {
    axios.get('https://api.myjson.com/bins/1a9wby')
    .then(response => {
      this.setState({
        data: response.data,
        loading: false,
        displayMessage: '',
      })
    })
    .catch(err => {
      let errorString = `${err.name}: the response was '${err.message}`
      this.setState({
        displayMessage: 'error',
        errorDetails: errorString,
      })
      console.log(`Data failed to fetch, error details ${err.name}, ${err.message}`)
    })
  }

  componentWillMount() {
    // axios.get('https://api.myjson.com/bins/msk5m')
    axios.get('https://api.myjson.com/bins/1a9wby')
      .then(response => {
        this.setState({
          data: response.data,
          loading: false,
          displayMessage: '',
        })
      })
      .then(() => {
        console.log('then working');
        CreateMobsterChunks(this.state.data, this.CreateMobsterChunksCallback);
      })
      .catch(err => {
        let errorString = `${err.name}: the response was '${err.message}`
        this.setState({
          displayMessage: 'error',
          errorDetails: errorString,
        })
      })
  }

  /*{Function to handle closing of modal}*/


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
        (this.state.loading || (this.state.searching && !this.state.filteredMobsterData.length)) &&
         <DisplayStatusInfoWindow
          state={this.state}
          retryGetMobsterData={this.retryGetMobsterData}
          />
        }
      <Switch>
      {
        (!this.state.loading || (!this.state.displayMessage.includes('no results'))) &&
        <Route exact path='/' render={this.CardGridComponentWithProps} />
      }
        <Route path="/login" render={this.MyLoginPage} />
        <Route path="/add" component={AddEditFormComponent} />
        <Route path="/edit" component={AddEditFormComponent} />
        <PrivateRoute path='/admin' component={Admin} />
      </Switch>
      <FooterComponent />
    </div>
    );
  }
}


export default App;
