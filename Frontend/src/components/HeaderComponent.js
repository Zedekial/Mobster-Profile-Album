import React from "react";
<<<<<<< HEAD
import ReactDOM from 'react';
=======
>>>>>>> 14d711558c037980f60e837ecee3b64644bdc1cc
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
<<<<<<< HEAD
// import MenuIcon from "@material-ui/icons/Menu";
=======
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
>>>>>>> 14d711558c037980f60e837ecee3b64644bdc1cc

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
      <AppBar position="static">
        <Toolbar>
<<<<<<< HEAD
          <Typography variant="h6" color="inherit" className={classes.grow}>
            LOGO
          </Typography>
=======
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            LOGO
          </Typography>
          <SearchIcon />
>>>>>>> 14d711558c037980f60e837ecee3b64644bdc1cc
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderComponent);
