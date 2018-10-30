import React, { Component } from 'react';
import './CSS/App.css';
import HeaderComponent from './components/HeaderComponent';
import CardGridComponent from './components/CardGridComponent'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      filteredMobsterData: [],
      searching: false,
    }
  }

  SearchComponentCallBack = (filteredMobsters, searching) => {
    switch(filteredMobsters) {
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
        />
        <CardGridComponent
          list={this.state.searching ?
                this.state.filteredMobsterData :
                this.state.data}
        />
      </div>
    );
  }
}

export default App;
