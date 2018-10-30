import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddUserButtonComponent from './components/AddUserButtonComponent'
import AddEditFormComponent from './components/AddEditFormComponent';

class App extends Component {
  constructor(){
    super();
    this.state = {LoggedIn: true}
  }
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Link to="/add"><AddUserButtonComponent state={this.state}/></Link>
          <Route path="/add" component={AddEditFormComponent} />
        </div>
      </Router>
      
      </div>
      );
    }
  }
  
  export default App;