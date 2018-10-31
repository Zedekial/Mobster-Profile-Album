import React from "react";
import Button from "@material-ui/core/Button";
import '../CSS/HeaderComponent.css';

class LoginButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  handleLogoutClick = () => {
    this.props.UpdateLoginState();
  }

  handleLoggingIn = () => {
    this.props.UpdateLoggingIn();
  }

  render() {
    let button;

    if (this.props.state.LoggedIn) {
      button = <Button className={'headerwrapper__logo'} color="primary" onClick={this.handleLogoutClick}>Logout</Button>;
    } else {
      button = <Button className={'headerwrapper__logo'} color="primary" onClick={this.handleLoggingIn}>Login</Button>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default LoginButtonComponent;
