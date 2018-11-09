import React, { Component } from 'react';
import CardComponentContainer from './CardComponentContainer';
import '../CSS/CardComponent.css';
import { shape, number, string, arrayOf, func } from 'prop-types';

/* This debounce function is from 'https://blog.flowandform.agency/debounce-in-react-fc5ed305a0e8' */
const debounce = function (a,b,c) {
  let d,e;
  return function() {
    function h(){
      (d=null,c)||(e=a.apply(f,g))
    }
    var f=this,g=arguments;
    return clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e
  }
}

class CardGridComponent extends Component {

  handleScroll = debounce(() => {
    if (this.props.state.scrolling) return;

    let lengthOfMobsterChunks = this.props.state.mobsterChunks.length;

    if (lengthOfMobsterChunks <= this.props.state.mobsterChunkIndex) return;
    let lastCard = document.querySelector('.card__grid > .card__container:last-child') ? document.querySelector('.card__grid > .card__container:last-child') : undefined;
    if(lastCard === undefined) return;
    let lastCardOffset = lastCard.offsetTop + lastCard.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;
    let bottomOffset = 20;

    if (pageOffset > lastCardOffset - bottomOffset) {
      this.loadMoreChunks()
    }
  }, 150)

  loadMoreChunks = () => {
    this.props.handleScrollLazyLoad()
  }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
      this.props.getMobsterData();
      this.props.resetChunkIndexCallBack();

  }
  render() {
    return (
      <div className={'card__grid'}>
        {this.props.list && this.props.list.map((data) =>
          <CardComponentContainer
            handleOpeningModal={this.props.handleOpeningModal}
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
