import React, { Component } from 'react';
import CardComponentContainer from './CardComponentContainer';
import '../CSS/CardComponent.css';
import { shape, number, string, arrayOf, func } from 'prop-types';

class CardGridComponent extends Component {

  handleScroll = () => {
    if (this.props.state.scrolling) return

    let lengthOfMobsterChunks = this.props.state.mobsterChunks.length;

    if (lengthOfMobsterChunks <= this.props.state.mobsterChunkIndex) return
    let lastCard = document.querySelector('.card__grid > .card__container:last-child');
    let lastCardOffset = lastCard.offsetTop + lastCard.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;
    let bottomOffset = 20;

    if (pageOffset > lastCardOffset - bottomOffset) {
      this.loadMoreChunks()
    }
  }

  loadMoreChunks = () => {
    this.props.handleScrollLazyLoad()
  }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
      this.props.getMobsterData();

  }
  render() {
    return (
      <div className={'card__grid'}>
        {this.props.list.map((data) =>
          <CardComponentContainer
            handleOpeningModal={this.props.handleOpeningModal}
            id={data._id}
            state={this.props.state}
            key={data.id}
            src={data.src}
            name={data.name}
            phone={data.phone}
            role={data.role}
            email={data.email}
          />
        )}
      </div>
    );
  }
}

CardGridComponent.propTypes = {
  list: arrayOf(shape({
    id: number,
    src: string,
    name: string.isRequired,
    role: string,
    phone: string,
    email: string,
  })),
  handleOpeningModal: func
}

export default CardGridComponent
