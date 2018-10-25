import React from "react";
import ReactDOM from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import '../CSS/HeaderComponent.css';



class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <Button color="primary" onClick={this.handleLogoutClick}>Logout</Button>;
    } else {
      button = <Button color="primary" onClick={this.handleLoginClick}>Login</Button>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}


const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function HeaderComponent(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="disable">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <img src="https://www.usvolleybal.nl/wp-content/uploads/2017/10/Logo.png" class="header-logo-mobiquity"></img>
          </Typography>
          <LoginControl />
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderComponent);
