import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddUserButtonComponent extends Component {
  
    render() { 
        return(
          <Link to={this.props.state.LoggedIn ? '/add' : '/login' }> 
            <button className={'standard__button__style'}>Add Mobster</button>
          </Link>

        )  
        }
    }
export default AddUserButtonComponent;