import React from "react";
import LoginButtonComponent from './LoginButtonComponent';
import SearchComponent from '../components/SearchComponent'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/HeaderComponent.css';

const HeaderComponent = (props) => {
  return (
    <header className={'header__container'} onClick={props.handleClosingModal}>
      <div className={'header__logo'}>
            <Link to="/">
              <img alt="MobiquityInc Logo" src="https://www.usvolleybal.nl/wp-content/uploads/2017/10/Logo.png" className={'header__logo__img'}></img>
              <img alt="MobiquityInc Logo" src="https://pbs.twimg.com/profile_images/892159922577821696/_aVRVun8_400x400.jpg" className={'header__logo__img--small hidden'}></img>
            </Link>
      </div>
      <div className="header__search">
        {
          window.location.pathname === '/' &&
          <SearchComponent
            state={props.state}
            SearchComponentCallBack={props.SearchComponentCallBack}
          />
        }
      </div>
      <div className={'header__buttons'}>
        {
          props.state.LoggedIn &&
          <Link to={props.state.LoggedIn ? { pathname: '/add', state: {path: 'add'}, getMobsterData: props.getMobsterData } : '/login' }> 
            <FontAwesomeIcon className="standard__button__style  add__mobster__icon" icon="user-plus" />
          </Link>
        }
        {
          <LoginButtonComponent
            state={props.state}
            UpdateLoginState={props.UpdateLoginState}
            UpdateLoggingIn={props.UpdateLoggingIn}
          />
        }
      </div>
    </header>
  );
}

export default HeaderComponent;
