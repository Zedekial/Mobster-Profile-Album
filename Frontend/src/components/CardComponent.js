import React, { Component } from 'react';

class CardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : true,
            class: 'show'
        };
        this.toggleCard = this.toggleCard.bind(this);
        this.toggleClass = this.toggleClass.bind(this);

    }
    toggleCard(){
        this.setState({active: !this.state.active});
        if(this.state.active){
            this.setState({class: 'show'});
        } else {
            this.setState({class: 'hide'});
        }
        console.log(this.state.active);
    }

    toggleClass(){
        this.setState({active: this.state.active});
        console.log(this.state.active);
    }


  render() {

    return (
      <div >
        <div className={this.state.class} onClick={this.toggleCard}>
            <img src={this.props.src}></img>
            <h1>{this.props.name}</h1>
        </div>
        <div className={this.state.class} onClick={this.toggleCard}>
            <h2>{this.props.name}</h2>
            <ul>
                <li>phone: {this.props.phone}</li>
                <li>email: {this.props.email}</li>
                <li>role: {this.props.role}</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default CardComponent;