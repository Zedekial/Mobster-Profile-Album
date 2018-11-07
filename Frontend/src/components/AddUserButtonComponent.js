import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AddUserButtonComponent = (props) => {
  return(
    <Link to={props.state.LoggedIn ? { pathname: '/add', state: {path: 'add'}, getMobsterData: props.getMobsterData } : '/login' }> 
      <button className={'standard__button__style'}>Add Mobster</button>
    </Link>
  )  
}
  
export default AddUserButtonComponent;