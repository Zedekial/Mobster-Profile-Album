import React from 'react';
import CardComponentContainer from './CardComponentContainer';
import '../CSS/CardComponent.css';

const CardGridComponent = (props) => {

  let mobstersArrayLength = props.list.length;
  console.log(mobstersArrayLength + ' mobsters');

  let chunkSize = 8;
  let numbOfReturnedChunks = mobstersArrayLength / chunkSize;
  console.log(numbOfReturnedChunks + ' nr of chunks');

  // console.log(chunkSize + ' is chunkSize')

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

export default CardGridComponent;
