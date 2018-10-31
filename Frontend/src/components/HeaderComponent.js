import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from '@material-ui/icons/Search';


import LoginButtonComponent from './LoginButtonComponent';
// import { Redirect, Link, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import LoginControlComponent from './LoginControlComponent';

import '../CSS/HeaderComponent.css';
import SearchComponent from '../components/SearchComponent'

function HeaderComponent(props) {
  return (
    <div className={'headerwrapper'}>
      <AppBar position="static" className={'MuiAppBar-colorPrimary-8'}>
        <Toolbar>
          <Typography type="title" color="inherit" className={'headerwrapper__logo'}>
            <img alt="MobiquityInc Logo" src="https://www.usvolleybal.nl/wp-content/uploads/2017/10/Logo.png" className={'headerwrapper__logo--img'}></img>
          </Typography>
          <SearchComponent
            state={props.state}
            SearchComponentCallBack={props.SearchComponentCallBack}
          >

          </SearchComponent>
          <Link to={props.state.LoggedIn ? '/' : '/login'} style={{ textDecoration: 'none', color: 'red' }}>
            {
              !props.state.LoggingIn &&
              <LoginButtonComponent
                state={props.state}
                UpdateLoginState={props.UpdateLoginState}
                UpdateLoggingIn={props.UpdateLoggingIn}
              />
            }
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderComponent;
