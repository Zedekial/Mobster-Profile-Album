import React, { Component } from 'react';
import {FormErrors} from './AddEditFormErrorsComponent';
import BackButtonComponent from './BackButtonComponent';
import AlertComponent from './AlertComponent';
import axios from 'axios';
import '../CSS/AddEditFormComponent.css';

class AddEditFormComponent extends Component {
    constructor(props){
        super(props);
        this.props.location.state ? this.data = this.props.location.state.foo.data : this.data = false;
        this.state = {
            id: this.data.id || '',
            name: this.data.name || '',
            email: this.data.email || '',
            role: this.data.role || '',
            phone: this.data.phone || '',
            formErrors: {email: '', name: '', role:'', phone:''},
            formSubmit: {title: '', value: '', method: '', url: ''},
            alert: {class: '', message: ''},
            path: window.location.pathname,
            emailValid: false,
            nameValid: false,
            roleValid: false,
            phoneValid: false,
            formValid: false
        };
        this.submitForm = this.submitForm.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
      console.log(this.props)

        switch (this.state.path){
            case '/add':
            this.setState({formSubmit: {title: 'Add new mobster', value: 'Create', method: 'post', url: '/mobsters'}});
            break;
            case '/edit':
            this.setState({formSubmit: {title: 'Update or remove mobster', value: 'Save', method: 'put', url: `/mobsters/${this.state.id}`}});
            break;
        }
    }

    submitForm(event){
        event.preventDefault();
        // console.log(this.state.formSubmit.method);
        // console.log(this.state.formSubmit.url);
        // console.log(fileField.files[0]);
        // console.log(this.getData());

        axios({
            method: this.state.formSubmit.method,
            url: this.state.formSubmit.url,
            data: this.getData()
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    getData(){
        let formData = new FormData();
        let fileField = document.getElementById('picture');

        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('role', this.state.role);
        formData.append('phone', this.state.phone);
        formData.append('picture', fileField.files[0]);
        console.log(fileField.files[0]);
        return formData;
    }

    deleteUser(){
        axios({
            method: 'delete',
            url: this.state.formSubmit.url,
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    setInput(nameInput,e){
        const value = e.target.value;
        this.setState({[nameInput]: value},
            () => { this.validateField(nameInput, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
        let roleValid = this.state.roleValid;
        let phoneValid = this.state.phoneValid;

        switch(fieldName) {
            case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
            case 'name':
            nameValid = value.length > 0;
            fieldValidationErrors.name = nameValid ? '': ' is invalid';
            break;
            case 'role':
            roleValid = value.length > 0;
            fieldValidationErrors.role = roleValid ? '': ' is invalid';
            break;
            case 'phone':
            phoneValid = value.match(/[0-9]{11}/);
            fieldValidationErrors.phone = phoneValid ? '': ' is invalid';
            break;
            default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid,
            roleValid: roleValid,
            phoneValid: phoneValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.roleValid && this.state.phoneValid});
    }


    render() {
    ( function ( document, window, index ){
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));
        return (
            <div className="add__user__form">
                <h1>{this.state.formSubmit.title}</h1>
                <form onSubmit={this.submitForm}>
                    <input className="standard__input__style add__user__form__input" id="name" type="text" placeholder="Name" value={this.state.name} onChange={this.setInput.bind(this, 'name')}/>
                    <input className="standard__input__style add__user__form__input" id="email" type="email" placeholder="Email" value={this.state.email} onChange={this.setInput.bind(this, 'email')}/>
                    <input className="standard__input__style add__user__form__input" id="role" type="text" placeholder="Role" value={this.state.role} onChange={this.setInput.bind(this, 'role')}/>
                    <input className="standard__input__style add__user__form__input" id="phone" type="text" placeholder="Phone" value={this.state.phone} onChange={this.setInput.bind(this, 'phone')}/>
                    {/* <input className="standard__input__style add__user__form__input" id="picture" type="file" accept="image/*"/> */}

                    <input type="file" name="picture" id="picture" className="inputfile inputfile-1" accept="image/*" />
					<label htmlFor="picture"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Choose a file&hellip;</span></label>


                    <AlertComponent className={this.state.alert.class} message={this.state.alert.message}/>



                    <div className="add__user__form__buttons">
                        <input className="standard__button__style" type="submit" value={this.state.formSubmit.value} disabled={!this.state.formValid}/>
                        {this.state.path === '/edit' && <button className="standard__button__style" onClick={this.deleteUser}>Delete</button> }
                        <BackButtonComponent/>
                    </div>
                </form>
                <FormErrors formErrors={this.state.formErrors} />
            </div>
        );
    }
}

export default AddEditFormComponent;
