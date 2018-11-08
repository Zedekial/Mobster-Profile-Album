import React from 'react';
import CardComponentContainer from './CardComponentContainer';
import '../CSS/CardComponent.css';
import { shape, number, string, arrayOf, func } from 'prop-types';

const CardGridComponent = (props) => {
  return (
    <div className={'card__grid'}>
      {props.list.map((data) =>
        <CardComponentContainer
          handleOpeningModal={props.handleOpeningModal}
          id={data._id}
          state={props.state}
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

export default CardGridComponent;
