import React, { Component } from 'react';
import ModalComponent from './ModalComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../CSS/CardComponent.css';
import { Link } from 'react-router-dom';

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      classFront: 'card--show',
      classBack: 'card--hide',
      modalVisible: false,
      details: this.props
    };
    this.toggleCard = this.toggleCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClosingModal = this.handleClosingModal.bind(this);
    this.handleOpeningModal = this.handleOpeningModal.bind(this);
  }

  toggleCard() {
    this.setState({ active: !this.state.active });
    this.state.active ? this.setState({ classFront: 'card--show', classBack: 'card--hide' }) : this.setState({ classFront: 'card--hide', classBack: 'card--show' });

  }

  handleClick() {
    this.handleOpeningModal(this.props)
    this.toggleCard()
  }

  handleClosingModal() {
    this.setState({
      modalVisible: false
    });
  }

  /*{Function to handle opening of modal}*/
  handleOpeningModal() {
    this.setState({
      modalVisible: true,
      details: this.props
    });
  }

  handleModalCardClick(event) {
    event.stopPropagation();
    return;
  }

  render() {
    const data = this.props;

    return (
      <div className={'card__container'}>
        {
          this.props.state.LoggedIn &&
          <Link to={{ pathname: '/edit', state: {path: 'edit', foo: {data}} }}>
            <div className="user__edit__button standard__button__style">
              <FontAwesomeIcon icon="user-edit" className="user__edit__icon"/> <span>Edit Mobster</span>
            </div>
          </Link>
        }
        <div onClick={this.toggleCard} className={`card__media ${this.state.classFront}`}>
            <img draggable='false' alt={this.props.name + ' img'} src={this.props.src}></img>
            <h1>{this.props.name}</h1>
        </div>
        <div className={`card__details ${this.state.classBack}`} onClick={this.toggleCard}>
            <h2>{this.props.name}</h2>
            <ul>
                <li>Phone: {this.props.phone}</li>
                <li>{this.props.email}</li>
                <li>{this.props.role}</li>
            </ul>
            <div className="user__show__more__button" onClick={this.handleClick}>
                <FontAwesomeIcon icon="eye" className="user__show__more__icon" /> <span>Show more</span>
            </div>
        </div>
        {
          this.state.modalVisible &&
            <ModalComponent
              handleModalCardClick={this.handleModalCardClick}
              handleClosingModal={this.handleClosingModal}
              src={this.state.details.src}
              name={this.state.details.name}
              email={this.state.details.email}
              phone={this.state.details.phone}
              role={this.state.details.role}
            />
        }
      </div>
    );
  }
}


export default CardComponent;
