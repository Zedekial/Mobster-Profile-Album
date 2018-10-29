import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LoginControlComponent from './LoginControlComponent';
import '../CSS/HeaderComponent.css';
import SearchComponent from '../components/SearchComponent'

function HeaderComponent(props) {
  return (
    <div className={'headercomponentroot'}>
      <AppBar position="static" className={'MuiAppBar-colorPrimary-8'}>
        <Toolbar>
          <Typography type="title" color="inherit" className={'headercomponentgrow'}>
            <img alt ="MobiquityInc Logo" src="https://www.usvolleybal.nl/wp-content/uploads/2017/10/Logo.png" className={'headercomponentlogomobiquity'}></img>
          </Typography>
          <SearchComponent
            state={props.state}
            SearchComponentCallBack={props.SearchComponentCallBack}
          />
          <LoginControlComponent />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderComponent;
