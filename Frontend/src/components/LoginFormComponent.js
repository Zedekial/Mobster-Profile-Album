import React from 'react';
import BackButtonComponent from './BackButtonComponent';
import '../CSS/LoginPageComponent.css';

class LoginFormComponent extends React.Component{
    render() {
        return(
            <div className="login__form__container">
                <h1>Authorization</h1>
                <form className="login__form" onSubmit={this.props.onSubmit}>
                    <input className="standard__input__style login__input" type="text" name="login" placeholder="login" ref="login"></input>
                    <input className="standard__input__style login__input" type="password" name="password" placeholder="password" ref="password"></input>
                    <div className="login__form__buttons">
                    <button className="standard__button__style" type="submit" value="submit">Login</button>
                    <BackButtonComponent/>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginFormComponent;
