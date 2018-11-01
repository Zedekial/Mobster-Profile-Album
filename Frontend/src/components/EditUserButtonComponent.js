import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';



export default class EditUserButtonComponent extends Component {
  render() {
    console.log(this.props);
    return (
      this.props.state && 
      <Link to={'/edit'}>
           <div className="user__edit__button standard__button__style">
            <FontAwesomeIcon icon="user-edit" className="user__edit__icon"/> <span>Edit Mobster</span>
          </div>
      </Link>
    )
  }
}
