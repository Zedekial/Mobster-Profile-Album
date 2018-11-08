import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/AddUserButtonComponent.css'

class AddUserButtonComponent extends Component {

  render() {
    return (
      <Link to={this.props.state.LoggedIn ? '/add' : '/login'}>
        {/* <button className={'standard__button__style add__user__button hidden '}>Add Mobster</button> */}
        <FontAwesomeIcon className="standard__button__style  add__mobster__icon" icon="user-plus" />
      </Link>

    )
  }
}
export default AddUserButtonComponent;