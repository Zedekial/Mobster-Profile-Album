import React, { Component } from 'react';
import '../CSS/AddUserButtonComponent.css';

class AddUserButtonComponent extends Component {
    render() { 
        return(
            this.props.state.LoggedIn &&
            <button className={'add__user__button'}>+</button>
        )  
        }
    }
export default AddUserButtonComponent;