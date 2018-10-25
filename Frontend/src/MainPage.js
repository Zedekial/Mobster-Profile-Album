import React, { Component } from 'react';
import SearchComponent from './components/SearchComponent'
import './CSS/App.css';
import HeaderComponent from './components/HeaderComponent';
import LoginPageComponent from './components/LoginPageComponent'
import FetchMobsterData from './API/FetchMobstersDataAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    let mobsterData = FetchMobsterData()
    console.log(mobsterData)
    this.setState({
      data: mobsterData
    })
    setTimeout(() => {
      console.log(this.state)
    }, 2000)
  }
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        {/* <LoginPageComponent /> */}
        <h1>The fantastic Mobster Photo Album - v.033a</h1>
        {/* <SearchComponent /> */}
      </div>
    );
  }
}

export default App;
