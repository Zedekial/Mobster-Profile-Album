import React from 'react';
import CardComponentContainer from './CardComponentContainer';
import '../CSS/CardComponent.css';

const CardGridComponent = (props) => {
    return (
        <div className={'card__grid'}>
          {props.list.map((data) =>
            <CardComponentContainer id={data.id} state={props.state} key={data.id} src={data.src} name={data.name} phone={data.phone} role={data.role} email={data.email}/>
          )}
        </div>
      );
}

export default CardGridComponent;
