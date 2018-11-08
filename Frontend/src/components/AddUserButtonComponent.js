import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/AddUserButtonComponent.css'

const AddUserButtonComponent = (props) => {
  return(
    <Link to={props.state.LoggedIn ? { pathname: '/add', state: {path: 'add'}, getMobsterData: props.getMobsterData } : '/login' }>
      <FontAwesomeIcon className="standard__button__style  add__mobster__icon" icon="user-plus" />
    </Link>
  )
}

export default AddUserButtonComponent;
