import React from "react";
import { Link } from 'react-router-dom';
import AddUserButtonComponent from './AddUserButtonComponent'
import HeaderLogoComponent from './HeaderLogoComponent'
import LoginButtonComponent from './LoginButtonComponent';
import SearchComponent from '../components/SearchComponent'
import '../CSS/HeaderComponent.css';

const HeaderComponent = (props) => {
  return (
    <header className={'header__container'}>
      <HeaderLogoComponent/>

      <div>
        {
          !props.state.LoggingIn &&
          <SearchComponent
            state={props.state}
            SearchComponentCallBack={props.SearchComponentCallBack}
          />
        }
      </div>

          <div className={'header__buttons'}>
          <Link to={props.state.LoggedIn ? '/add' : '/login' }>
                <AddUserButtonComponent state={props.state}/>
          </Link>
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
          </div>
    </header>
  );
}

export default HeaderComponent;
