
import CardComponentContainer from './CardComponentContainer';
import '../CSS/CardComponent.css';
import React, { Component } from 'react';
import { shape, number, string, arrayOf, func } from 'prop-types';

export default class CardGridComponent extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
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