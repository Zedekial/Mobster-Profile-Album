import React from "react";
import ReactDOM from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LoginButtonComponent from './LoginButtonComponent';
import '../CSS/HeaderComponent.css';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import LoginPage from "./LoginPage";


function HeaderComponent(props) {
  console.log(`HeaderComp props is, ${JSON.stringify(props)}`);
  return (
    <div className={'headerwrapper'}>
      <AppBar position="static" className={'MuiAppBar-colorPrimary-8'}>
        <Toolbar>
        <Typography type="title" color="inherit" className={'headerwrapper__logo'}>
          <img src="https://www.usvolleybal.nl/wp-content/uploads/2017/10/Logo.png" className={'headerwrapper__logo--img'}></img>
        </Typography>
        <Link to="/login" style={{textDecoration: 'none'}}>
          <LoginButtonComponent 
            mainState={props.mainState} 
            updateLoginState={props.updateLoginState} 
          />
        </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderComponent;
