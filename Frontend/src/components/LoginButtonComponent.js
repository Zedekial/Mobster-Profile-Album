import React from "react";
import Button from "@material-ui/core/Button";
import '../CSS/HeaderComponent.css';

class LoginButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    this.props.updateLoginState();
  }

  render() {
    let button;
    
    if (this.props.mainState.LoggedIn) {
      button = <Button className={'headerwrapper__logo'} color="primary" onClick={this.handleLogoutClick}>Logout</Button>;
    } else {
      button = <Button className={'headerwrapper__logo'} color="primary" >Login</Button>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default LoginButtonComponent;
