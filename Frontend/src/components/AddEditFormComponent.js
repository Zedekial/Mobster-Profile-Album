import React, { Component } from 'react';
import '../CSS/AddEditFormComponent.css';

class AddEditFormComponent extends Component {
    constructor(){
        super();
        this.state = {name:'',email:'',role:'', phone:'',picture:''};
        this.submitForm = this.submitForm.bind(this);
    }
    
    submitForm(event){
        event.preventDefault();
        let data = {
            "name": this.state.name, 
            "email": this.state.email, 
            "role": this.state.role,
            "phone": this.state.phone,
            "picture": this.state.picture,
        }
        
        console.log(data);
        
    }
    setInput(nameInput,e){
        this.setState({[nameInput]: e.target.value});
    }
    
    render() {
        return (
            <div>
            <form onSubmit={this.submitForm}>
                <input id="picture" type="file" value={this.state.picture} onChange={this.setInput.bind(this, 'picture')} accept="image/*"/>
                <input id="name" type="text" placeholder="Name" value={this.state.name} onChange={this.setInput.bind(this, 'name')}/>
                <input id="email" type="email" placeholder="Email" value={this.state.email} onChange={this.setInput.bind(this, 'email')}/>
                <input id="role" type="text" placeholder="Role" value={this.state.role} onChange={this.setInput.bind(this, 'role')}/>
                <input id="phone" type="text" placeholder="Phone" value={this.state.phone} onChange={this.setInput.bind(this, 'phone')}/>
                <input type="submit" value="Create"/>
            </form>
            </div>
            );
        }
    }
    
    export default AddEditFormComponent;
    