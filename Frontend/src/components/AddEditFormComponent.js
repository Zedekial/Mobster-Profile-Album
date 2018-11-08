import React, { Component } from 'react';
import BackButtonComponent from './BackButtonComponent';
import AlertComponent from './AlertComponent';
import FileInputComponent from './FileInputComponent';
import axios from 'axios';
import '../CSS/AddEditFormComponent.css';

class AddEditFormComponent extends Component {
    constructor(props) {
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
            alert: {class: '', message: '', data:''},
            emailValid: false,
            nameValid: false,
            roleValid: false,
            phoneValid: false,
        };
        this.submitForm = this.submitForm.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.getData = this.getData.bind(this);
        this.setInitialState = this.setInitialState.bind(this);
    }

    componentDidMount() {
        this.setInitialState();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.state.path !== this.props.location.state.path) {
          this.setInitialState();
        }
    }

    setInitialState(){
        switch (this.props.location.state.path){
            case 'add':
            this.setState({
                id: '', 
                name: '', 
                email: '', 
                role: '', 
                phone: '',
                src: '',
                formSubmit: {title: 'Add new mobster', value: 'Create', method: 'post', url: '/mobsters', delete: false}});
            break;
            case 'edit':
            const data = this.props.location.state.foo.data;
            this.setState({
                id: data.id, 
                name: data.name, 
                email: data.email, 
                role: data.role, 
                phone: data.phone,
                src: data.src,
                formSubmit: {title: 'Update or remove mobster', value: 'Save', method: 'put', url: `/mobsters/${data.id}`, delete: true},
                emailValid: true,
                nameValid: true,
                roleValid: true,
                phoneValid: true,
            });
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
        formData.append('src', fileField.files[0] ? fileField.files[0] : this.state.src);
        return formData;
    }

    submitForm(){
        let inputList = document.querySelectorAll('.add__user__form__input');
        for (let input of inputList){
            this.validateField(input.id, input.value);
        }

        this.validateForm() ? this.saveUser() : this.setState({alert: {class: 'error', message: 'Missing required inputs!'}});
    }

    saveUser(){
        axios({
            method: this.state.formSubmit.method,
            url: this.state.formSubmit.url,
            data: this.getData()
        })
        .then((response) => {
            if(response.status === 200) {
                this.setState({name: '', email: '', role: '', phone: '', src: '', alert: {class: 'success', message: 'Your changes have been saved!', data: response.data}})
            }
        })
        .catch((error) => {
            this.setState({ alert: { class: 'error', message: error } })
        });
    }

    deleteUser(){
        axios({
            method: 'delete',
            url: this.state.formSubmit.url,
        })
        .then((response) => {
            if(response.status === 200) {
                this.setState({name: '', email: '', role: '', phone: '', src: '', alert: {class: 'success', message: 'Mobster deleted!'}})
                
            }
        })
        .catch((error) => {
                this.setState({ alert: { class: 'error', message: error } })
        });
    }

    setInput(nameInput, e) {
        const value = e.target.value;
        this.setState({ [nameInput]: value },
            () => { this.validateField(nameInput, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;

        switch (fieldName) {
            case 'email':
            let emailValid = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value);
            fieldValidationErrors.email = emailValid ? '' : 'form--errors';
            this.setState({emailValid: emailValid});
            break;
            case 'name':
            let nameValid = value.length > 0;
            fieldValidationErrors.name = nameValid ? '': 'form--errors';
            this.setState({nameValid: nameValid});
            break;
            case 'role':
            let roleValid = value.length > 0;
            fieldValidationErrors.role = roleValid ? '': 'form--errors';
            this.setState({roleValid: roleValid});
            break;
            case 'phone':
            let phoneValid = (/[0-9]{2}\-[0-9]{8}/).test(value);
            fieldValidationErrors.phone = phoneValid ? '': 'form--errors';
            this.setState({phoneValid: phoneValid});
            break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors});
    }

    validateForm() {
        return this.state.emailValid && this.state.nameValid && this.state.roleValid && this.state.phoneValid;
    }

    render() {
        return (
            <div className="add__user__form">
                <h1>{this.state.formSubmit.title}</h1>
                <form>
                    <input className={`standard__input__style add__user__form__input ${this.state.formErrors.name}`} id="name" type="text" placeholder="Name" value={this.state.name} onChange={this.setInput.bind(this, 'name')}/>
                    <input className={`standard__input__style add__user__form__input ${this.state.formErrors.email}`} id="email" type="email" placeholder="Email" value={this.state.email} onChange={this.setInput.bind(this, 'email')}/>
                    <input className={`standard__input__style add__user__form__input ${this.state.formErrors.role}`} id="role" type="text" placeholder="Role" value={this.state.role} onChange={this.setInput.bind(this, 'role')}/>
                    <input className={`standard__input__style add__user__form__input ${this.state.formErrors.phone}`} id="phone" type="text" placeholder="Phone" value={this.state.phone} onChange={this.setInput.bind(this, 'phone')}/>
                    <FileInputComponent name="picture" id="picture" filename={this.state.src}/>
                </form>
                <AlertComponent className={this.state.alert.class} message={this.state.alert.message} data={this.state.alert.data}/>
                <div className="add__user__form__buttons">
                    <button className="standard__button__style" onClick={this.submitForm}>{this.state.formSubmit.value}</button>
                    {this.state.formSubmit.delete && <button className="standard__button__style add__user__form__delete" onClick={this.deleteUser}>Delete</button> }
                    <BackButtonComponent/>
                </div>
            </div>
        );
    }
}

export default AddEditFormComponent;
