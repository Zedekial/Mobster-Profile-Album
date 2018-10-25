import React, { Component } from 'react';
import '../CSS/CardComponent.css';

class CardComponentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : true,
            classFront: 'card--show',
            classBack: 'card--hide',
        };
        this.toggleCard = this.toggleCard.bind(this);

    }
    toggleCard(){
        this.setState({active: !this.state.active});
        if(this.state.active){
            this.setState({classFront: 'card--show', classBack: 'card--hide'});
        } else {
            this.setState({classFront: 'card--hide', classBack: 'card--show'});
        }
    }

  render() {

    return (
      <div >
        <div className={this.state.classFront} onClick={this.toggleCard}>
            <img src={this.props.src}></img>
            <h1>{this.props.name}</h1>
        </div>
        <div className={this.state.classBack} onClick={this.toggleCard}>
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

export default CardComponentContainer;