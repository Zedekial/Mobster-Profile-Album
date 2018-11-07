import React, { Component } from 'react';
import CardComponentContainer from './CardComponentContainer';
import '../CSS/CardComponent.css';

class CardGridComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
    }
  }

  handleScroll = () => {
    if (this.state.scrolling) return

    let lengthOfMobsterChunks = this.props.state.mobsterChunks.length;

    if (lengthOfMobsterChunks <= this.props.state.mobsterChunkIndex) return
    let lastCard = document.querySelector('.card__grid > .card__container:last-child');
    let lastCardOffset = lastCard.offsetTop + lastCard.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;
    let bottomOffset = 20;

    console.log(lastCard);

    if (pageOffset > lastCardOffset - bottomOffset) {
      this.loadMoreChunks()
    }
  }

  loadMoreChunks = () => {
    this.setState(() => ({
      scrolling: true,
    }), this.props.handleScrollLazyLoad)
  }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
  }
  render() {
    return (
      <div className={'card__grid'}>
      {this.props.list && this.props.list.map((data) =>
        <CardComponentContainer
        handleOpeningModal={this.props.handleOpeningModal}
        updateChunkIndex={this.props.updateChunkIndex}
        id={data._id}
        state={this.props.state}
        key={data._id}
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

export default CardGridComponent;
