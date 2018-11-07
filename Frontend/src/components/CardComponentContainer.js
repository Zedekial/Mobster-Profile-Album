import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardMediaComponent } from './CardMediaComponent';
import { CardDetailsComponent } from './CardDetailsComponent';
import EditUserButtonComponent from './EditUserButtonComponent';
import ModalContainerComponent from './ModalContainerComponent';
import ModalComponent from './ModalComponent'

import '../CSS/EditUserButtonComponent.css'

class CardComponentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            classFront: 'card--show',
            classBack: 'card--hide',
            modalVisible: false,
            details: this.props,
        };
        this.toggleCard = this.toggleCard.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClosingModal = this.handleClosingModal.bind(this);
        this.handleOpeningModal = this.handleOpeningModal.bind(this);
    }

    toggleCard() {
        console.log('toggle click method')

        this.setState({ active: !this.state.active });
        this.state.active ? this.setState({ classFront: 'card--show', classBack: 'card--hide' }) : this.setState({ classFront: 'card--hide', classBack: 'card--show' });

    }

    handleClick = () => {
        this.handleOpeningModal(this.props)
        // console.log('handle click method')
        this.toggleCard()
    }
    handleClosingModal = () => {
        this.setState({
          modalVisible: false
        });
      }

      /*{Function to handle opening of modal}*/
      handleOpeningModal = () => {
        this.setState({
          modalVisible: true,
          details: this.props
        });
      }

      handleModalCardClick = (event) => {
        console.log('Clicked');
        event.stopPropagation();
        return;
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
              handleOpeningModal={this.handleOpeningModal}
              phone={this.props.phone}
              email={this.props.email}
              role={this.props.role}
              name={this.props.name}
              toggleCard={this.toggleCard}
              className={`card__details ${this.state.classBack}`}
              handleClick={this.handleClick}
            />
           {
            this.state.modalVisible &&
            <ModalContainerComponent className="modal__container">
              <ModalComponent
                handleModalCardClick={this.handleModalCardClick}
                handleClosingModal={this.handleClosingModal}
                src={this.state.details.src}
                name={this.state.details.name}
                email={this.state.details.email}
                phone={this.state.details.phone}
                role={this.state.details.role}
              />
            </ModalContainerComponent>
           }
          </div>
        );
    }
}

CardComponentContainer.propTypes = {
    phone: PropTypes.number,
    email: PropTypes.string,
    role: PropTypes.string,
    name: PropTypes.string,
    toggleCard: PropTypes.func,
    handleClick: PropTypes.func
}

export default CardComponentContainer;
