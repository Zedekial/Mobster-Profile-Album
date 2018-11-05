import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardMediaComponent } from './CardMediaComponent';
import { CardDetailsComponent } from './CardDetailsComponent';
import EditUserButtonComponent from './EditUserButtonComponent';

import '../CSS/EditUserButtonComponent.css'

class CardComponentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            classFront: 'card--show',
            classBack: 'card--hide',
        };
        this.toggleCard = this.toggleCard.bind(this);
    }

    toggleCard() {
        console.log('toggle click method')

        this.setState({ active: !this.state.active });
        this.state.active ? this.setState({ classFront: 'card--show', classBack: 'card--hide' }) : this.setState({ classFront: 'card--hide', classBack: 'card--show' });

    }

    handleClick = () => {
        this.props.handleOpeningModal(this.props)
        // console.log('handle click method')
        this.toggleCard()
    }

    render() {
        return (
            <div className={'card__container'}>
                <EditUserButtonComponent data={this.props} state={this.props.state} />
                <CardMediaComponent
                    src={this.props.src}
                    name={this.props.name}
                    onClick={this.toggleCard}
                    className={`card__media ${this.state.classFront}`}
                />
                <CardDetailsComponent
                    handleOpeningModal={this.props.handleOpeningModal}
                    phone={this.props.phone}
                    email={this.props.email}
                    role={this.props.role}
                    name={this.props.name}
                    toggleCard={this.toggleCard}
                    className={`card__details ${this.state.classBack}`}
                    handleClick={this.handleClick}
                />
            </div>
        );
    }
}

CardComponentContainer.propTypes = {
    phone: PropTypes.number,
    email: PropTypes.string,
    role: PropTypes.string,
    name: PropTypes.number,
    toggleCard: PropTypes.func,
    handleClick: PropTypes.func
}

export default CardComponentContainer;
