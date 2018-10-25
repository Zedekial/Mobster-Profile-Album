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
      loading: true,
    }
  }
  SearchComponentCallBack = (filteredMobsters, searching) => {
    console.log(filteredMobsters, searching);
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/hqo8c')
      .then((res) => res.json())
      .then((mobData) => {
        this.setState({
          data: mobData,
          loading: false,
        })
      });
  }
  render() {
    return (
      <div className="App">
        <HeaderComponent
          state={this.state}
          SearchComponentCallBack={this.SearchComponentCallBack}
        />
      </div>
    );
  }
}

export default App;
