import React from "react";
import { Link } from 'react-router-dom';
import AddUserButtonComponent from './AddUserButtonComponent'
import HeaderLogoComponent from './HeaderLogoComponent'
import LoginButtonComponent from './LoginButtonComponent';
import SearchComponent from '../components/SearchComponent'
import '../CSS/HeaderComponent.css';

const HeaderComponent = (props) => {
  return (
    <header className={'header__container'} onClick={props.handleClosingModal}>
      <HeaderLogoComponent/>
      
          {
            !props.state.LoggingIn &&
            <SearchComponent
              state={props.state}
              SearchComponentCallBack={props.SearchComponentCallBack}
            />
          }
          <Link to={ props.state.LoggedIn ? '/' : '/login' } style={{textDecoration: 'none'}}>
          {
            !props.state.LoggingIn &&
            <LoginButtonComponent
            state={props.state}
            UpdateLoginState={props.UpdateLoginState}
            UpdateLoggingIn={props.UpdateLoggingIn}
            />
          }
          </Link>
          <Link to={props.state.LoggedIn ? '/add' : '/login' }>
                <AddUserButtonComponent state={props.state}/>
          </Link>
    </header>
  );
}

export default HeaderComponent;
