import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';



export default class EditUserButtonComponent extends Component {
  render() {
    const data = this.props.data;
    // console.log(this.props.data);
    return (
      this.props.state && 
      <Link to={{ pathname: '/edit', state: {foo: {data}} }}>

           <div className="user__edit__button standard__button__style">
            <FontAwesomeIcon icon="user-edit" className="user__edit__icon"/> <span>Edit Mobster</span>
          </div>
      </Link>
    )
  }
}
