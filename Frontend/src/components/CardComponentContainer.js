import React, { Component } from 'react';
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
        this.setState({ active: !this.state.active });
        this.state.active ? this.setState({ classFront: 'card--show', classBack: 'card--hide' }) : this.setState({ classFront: 'card--hide', classBack: 'card--show' });

    }

    handleClick = () => {
        this.props.handleOpeningModal(this.props)
    }

    handleScroll = () => {
      console.log('handleScroll is visible')
      if (this.scroller) {
        console.log(this.scroller.scrollTop);
      }
    }


    render() {
        return (
            <div className={'card__container'}>
              <div style={{'border: 1px solid red'}}
                onScroll={this.handleScroll}
                  ref={(scroller) => {
                  this.scroller = scroller;
                  }}
              >
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
                  onClick={this.toggleCard}
                  className={`card__details ${this.state.classBack}`}
                  handleClick={this.handleClick}
                />
              </div>
            </div>
        );
    }
}

export default CardComponentContainer;
