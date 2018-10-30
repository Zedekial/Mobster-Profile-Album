import React, { Component } from 'react';
import './CSS/App.css';
import HeaderComponent from './components/HeaderComponent';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      filterMobsterData: [],
      searching: false,
    }
  }

  SearchComponentCallBack = (filteredMobsters, searching) => {
    switch(filteredMobsters) {
      case null:
      case []:
        this.setState({
          searching: searching,
        }, () => {
          console.log(`Null or empty array, ${JSON.stringify(this.state)}`)
        })
        console.log(`You are passing null, ${JSON.stringify(filteredMobsters)}`)
        break;
      case undefined:
        console.log(`Something went wrong undefined data`)
        break;
      default:
        console.log(`Filtered data received, ${JSON.stringify(filteredMobsters)}`)
        this.setState({
          filteredMobstersData: filteredMobsters,
          searching: searching,
        }, () => {
          console.log(`Fitered data, ${JSON.stringify(this.state)}`)
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
        />
        <CardGridComponent
          list={dataTest}
        />
      </div>
    );
  }
}

export default App;
