import React, { Component } from 'react';
import SearchComponent from './components/SearchComponent'
import './CSS/App.css';
import HeaderComponent from './components/HeaderComponent';
import LoginPageComponent from './components/LoginPageComponent'
import FetchMobsterData from './API/FetchMobstersDataAPI';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    }
  }
  SearchComponentCallBack = (filteredMobsters, searching) => {
    if (filteredMobsters === null || filteredMobsters === []) {
      console.log(`You are passing null, ${filteredMobsters}`)
    } else if (filteredMobsters === undefined) {
      console.log(`Something went wrong undefined data`)
    } else if (filteredMobsters !== null) {
      console.log(`Filtered data received, ${filteredMobsters}`)
    }
    // console.log(filteredMobsters, searching);

    //set state

  }

  componentDidMount() {
    // fetch('https://api.myjson.com/bins/hqo8c')
    //   .then((res) => res.json())
    //   .then((mobData) => {
    //     this.setState({
    //       data: mobData,
    //       loading: false,
    //     })
    //   });

    axios.get('https://api.myjson.com/bins/hqo8c')
      .then(response => {
        this.setState({
          data: response.data,
          loading: false,
        })
      })
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
