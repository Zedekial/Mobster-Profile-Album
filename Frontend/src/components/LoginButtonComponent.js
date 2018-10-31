import React from "react";

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
      button = <button className={'standard__button__style'} onClick={this.handleLogoutClick}>Logout</button>;
    } else {
      button = <button className={'standard__button__style'} onClick={this.handleLoggingIn}>Login</button>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default LoginButtonComponent;
