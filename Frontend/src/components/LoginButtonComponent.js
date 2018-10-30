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
    // this.setState({isLoggedIn: true});
    console.log(this.props.mainState.LoggedIn);
  }

  handleLogoutClick() {
    // this.setState({isLoggedIn: false});
    
    this.props.updateLoginState();
  }

  render() {
    console.log(`LoginButton props is ${JSON.stringify(this.props)}`)
    // var isLoggedIn = this.state.isLoggedIn;
    // console.log(this.props.mainState.LoggedIn);
    let button;

    if (this.props.mainState.LoggedIn) {
      button = <Button className={'headerwrapper__logo'} color="primary" onClick={this.handleLogoutClick}>Logout</Button>;
    } else {
      button = <Button className={'headerwrapper__logo'} color="primary" onClick={this.handleLoginClick} >Login</Button>;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default LoginButtonComponent;
