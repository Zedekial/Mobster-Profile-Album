import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const EditUserButtonComponent = (props ) => {
  const data = props.data;
  return (
    props.state.LoggedIn &&
    <Link to={{ pathname: '/edit', state: {path: 'edit', foo: {data}} }}>
      <div className="user__edit__button standard__button__style">
        <FontAwesomeIcon icon="user-edit" className="user__edit__icon"/> <span>Edit Mobster</span>
      </div>
    </Link>
  )
}

export default EditUserButtonComponent;
  