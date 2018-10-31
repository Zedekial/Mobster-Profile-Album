import React, { Component } from 'react';

class AddUserButtonComponent extends Component {
    render() { 
        return(
            this.props.state.LoggedIn &&
            <button className={'standard__button__style'}>Add Mobster</button>
        )  
        }
    }
export default AddUserButtonComponent;