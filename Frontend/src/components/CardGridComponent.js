
import CardComponentContainer from './CardComponentContainer';
import '../CSS/CardComponent.css';
import React, { PureComponent, Component } from 'react'

export default class CardGridComponent extends PureComponent {
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


