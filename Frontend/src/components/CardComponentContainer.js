import React, { Component } from 'react';
import { CardMediaComponent } from './CardMediaComponent';
import { CardDetailsComponent } from './CardDetailsComponent';

class CardComponentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : false,
            classFront: 'card--show',
            classBack: 'card--hide',
        };
        this.toggleCard = this.toggleCard.bind(this);
    }

    toggleCard(){
        this.setState({active: !this.state.active});
        this.state.active ? this.setState({classFront: 'card--show', classBack: 'card--hide'}) : this.setState({classFront: 'card--hide', classBack: 'card--show'});
    }

    render() {
        return (
        <div className={'card__container'}>
            <CardMediaComponent src={this.props.src} name={this.props.name} onClick={this.toggleCard} className={`card__media ${this.state.classFront}`}  />
            <CardDetailsComponent handleOpeningModal={this.props.handleOpeningModal} phone={this.props.phone} email={this.props.email} role={this.props.role} name={this.props.name} onClick={this.toggleCard} className={`card__details ${this.state.classBack}`}/>
        </div>
        );
    }
}

export default CardComponentContainer;