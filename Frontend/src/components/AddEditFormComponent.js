import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/AddEditFormComponent.css';

class AddEditFormComponent extends Component {
    constructor(){
        super();
        this.state = {name:'',email:'',role:'', phone:''};
        this.submitForm = this.submitForm.bind(this);
    }
    
    submitForm(event){
        event.preventDefault();
        let formData = new FormData();
        let fileField = document.getElementById('picture');
        
        console.log('file:');
        console.log(fileField.files[0]);
        
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('role', this.state.role);
        formData.append('phone', this.state.phone);
        formData.append('picture', fileField.files[0]);
        
        axios.post('url', formData)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
    setInput(nameInput,e){
        this.setState({[nameInput]: e.target.value});
    }
    
    render() {
        return (
            <div>
                <form className="add__user__form" onSubmit={this.submitForm}>
                <input className="add__user__form__input" id="picture" type="file" accept="image/*"/>
                <input className="add__user__form__input" id="name" type="text" placeholder="Name" value={this.state.name} onChange={this.setInput.bind(this, 'name')}/>
                <input className="add__user__form__input" id="email" type="email" placeholder="Email" value={this.state.email} onChange={this.setInput.bind(this, 'email')}/>
                <input className="add__user__form__input" id="role" type="text" placeholder="Role" value={this.state.role} onChange={this.setInput.bind(this, 'role')}/>
                <input className="add__user__form__input" id="phone" type="text" placeholder="Phone" value={this.state.phone} onChange={this.setInput.bind(this, 'phone')}/>
                <input className="add__user__form__button" type="submit" value="Create"/>
            </form>
            </div>
            );
        }
    }
    
    export default AddEditFormComponent;
    