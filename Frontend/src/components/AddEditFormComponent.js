import React, { Component } from 'react';
import {FormErrors} from './AddEditFormErrorsComponent';
import BackButtonComponent from './BackButtonComponent';
import AlertComponent from './AlertComponent';
import FileInputComponent from './FileInputComponent';
import axios from 'axios';
import '../CSS/AddEditFormComponent.css';

class AddEditFormComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            role: '',
            phone: '',
            src: '',
            formErrors: {email: '', name: '', role:'', phone:''},
            formSubmit: {title: '', value: '', method: '', url: '', delete: false},
            alert: {class: '', message: ''},
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
        this.defineInitialValues = this.defineInitialValues.bind(this);
    }

    componentDidMount() {
        this.defineInitialValues();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.state.path !== this.props.location.state.path) {
          this.defineInitialValues();
        }
    }

    defineInitialValues(){
        switch (this.props.location.state.path){
            case 'add':
            this.setState({
                id: '', 
                name: '', 
                email: '', 
                role: '', 
                phone: '',
                src: false,
                formSubmit: {title: 'Add new mobster', value: 'Create', method: 'post', url: '/mobsters', delete: false}});
            break;
            case 'edit':
            const data = this.props.location.state.foo.data;
            console.log(data);
            this.setState({
                id: data.id, 
                name: data.name, 
                email: data.email, 
                role: data.role, 
                phone: data.phone,
                src: data.src,
                formSubmit: {title: 'Update or remove mobster', value: 'Save', method: 'put', url: `/mobsters/${data.id}`, delete: true}});
            break;
        }
    }

    getData(){
        let formData = new FormData();
        let fileField = document.getElementById('picture');

        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('role', this.state.role);
        formData.append('phone', this.state.phone);
        formData.append('src', fileField.files[0] == undefined ? this.state.src : fileField.files[0]);
        return formData;
    }

    submitForm(){
        axios({
            method: this.state.formSubmit.method,
            url: this.state.formSubmit.url,
            data: this.getData()
        }).then((response) => {
            if(response.status === 200) {
                console.log(response);
                this.setState({name: '', email: '', role: '', phone: '', alert: {class: 'success', message: 'Your changes have been saved!'}})
            }
        })
        .catch((error) => {
            this.setState({alert: {class: 'error', message: error}})
        });
    }

    deleteUser(){
        axios({
            method: 'delete',
            url: this.state.formSubmit.url,
        }).then((response) => {
            if(response.status === 200) {
                this.setState({name: '', email: '', role: '', phone: '', alert: {class: 'success', message: 'Mobster deleted!'}})
            }
        })
        .catch((error) => {
            this.setState({alert: {class: 'error', message: error}})
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
        return (
            <div className="add__user__form">
                <h1>{this.state.formSubmit.title}</h1>
                <form>
                    <input className="standard__input__style add__user__form__input" id="name" type="text" placeholder="Name" value={this.state.name} onChange={this.setInput.bind(this, 'name')}/>
                    <input className="standard__input__style add__user__form__input" id="email" type="email" placeholder="Email" value={this.state.email} onChange={this.setInput.bind(this, 'email')}/>
                    <input className="standard__input__style add__user__form__input" id="role" type="text" placeholder="Role" value={this.state.role} onChange={this.setInput.bind(this, 'role')}/>
                    <input className="standard__input__style add__user__form__input" id="phone" type="text" placeholder="Phone" value={this.state.phone} onChange={this.setInput.bind(this, 'phone')}/>
                    <FileInputComponent name="picture" id="picture" filename={this.state.src}/>
                </form>
                <AlertComponent className={this.state.alert.class} message={this.state.alert.message}/>
                <div className="add__user__form__buttons">
                    <button className="standard__button__style" onClick={this.submitForm}>{this.state.formSubmit.value}</button>
                    {this.state.formSubmit.delete && <button className="standard__button__style" onClick={this.deleteUser}>Delete</button> }
                    <BackButtonComponent/>
                </div>
                <FormErrors formErrors={this.state.formErrors} />
            </div>
        );
    }
}

export default AddEditFormComponent;
