
import CardComponentContainer from './CardComponentContainer';
import '../CSS/CardComponent.css';
import React, { Component } from 'react';
import { shape, number, string, arrayOf, func } from 'prop-types';
import { LoadingMessage } from './DisplayStatusInfoComponent';

export default class CardGridComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: 18,
      loadingState: false
    };
  }

  componentDidMount() {
    this.props.getMobsterData();

    this.refs.iScroll.addEventListener("scroll", () => {
      if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=this.refs.iScroll.scrollHeight){
        this.loadMoreItems();
      }
    });
  }

  getMobsters = (props) => {
    let mobsters = this.props.list.map((data) =>
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
    )
    return mobsters;
  }

  displayMobsters(mobstersArr) {
    var items = [];
    for (var i = 0; i < this.state.items; i++) {
      items.push(mobstersArr[i]);
    }
    return items;
  }

  loadMoreItems() {
    this.setState({ loadingState: true });
    setTimeout(() => {
      this.setState({ items: this.state.items + 12, loadingState: false });
    }, 3000);
  }

  render() {
    let mobsters = this.getMobsters();
    return (
      <div ref="iScroll" style={{ height: "100vh",width: "100vw", overflow: "auto"}}>
      <div className={'card__grid'} >
      {/* {this.loadItems} */}
        {this.displayMobsters(mobsters)}
        {this.state.loadingState ? <LoadingMessage /> : ""}
      </div>
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