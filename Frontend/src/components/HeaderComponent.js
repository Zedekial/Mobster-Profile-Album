import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import LoginButtonComponent from './LoginButtonComponent';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import LoginPage from "./LoginPage";

// import LoginControlComponent from './LoginControlComponent';

import '../CSS/HeaderComponent.css';
import SearchComponent from '../components/SearchComponent'

function HeaderComponent(props) {
  console.log(`HeaderComp props is, ${JSON.stringify(props)}`);
  return (
    <div className={'headerwrapper'}>
      <AppBar position="static" className={'MuiAppBar-colorPrimary-8'}>
        <Toolbar>
          <Typography type="title" color="inherit" className={'headercomponentgrow'}>
            <img alt ="MobiquityInc Logo" src="https://www.usvolleybal.nl/wp-content/uploads/2017/10/Logo.png" className={'headercomponentlogomobiquity'}></img>
          </Typography>
          <SearchComponent
            state={props.state}
            SearchComponentCallBack={props.SearchComponentCallBack}
          />
          <Link to="/login" style={{textDecoration: 'none'}}>
            <LoginButtonComponent
              state={props.state}
              updateLoginState={props.updateLoginState}
            />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderComponent;
