import React from "react";
import AddUserButtonComponent from './AddUserButtonComponent'
import HeaderLogoComponent from './HeaderLogoComponent'
import LoginButtonComponent from './LoginButtonComponent';
import SearchComponent from '../components/SearchComponent'
import '../CSS/HeaderComponent.css';

const HeaderComponent = (props) => {
  return (
    <header className={'header__container'} onClick={props.handleClosingModal}>
      <HeaderLogoComponent />
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
        {props.state.LoggedIn &&
          <AddUserButtonComponent state={props.state} />}
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
