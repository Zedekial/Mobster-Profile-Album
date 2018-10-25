import React from "react";
import Button from "@material-ui/core/Button";
import '../CSS/HeaderComponent.css';


class LoginButtonComponent extends React.Component {
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
      button = <Button className={'headerwrapper__logo'} color="primary" onClick={this.handleLogoutClick}>Logout</Button>;
    } else {
      button = <Button className={'headerwrapper__logo'} color="primary" onClick={this.handleLoginClick}>Login</Button>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default LoginButtonComponent;
