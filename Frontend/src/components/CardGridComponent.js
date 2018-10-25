import React, { Component } from 'react';
import CardComponentContainer from './CardComponentContainer';
import dataTest from './dataTest.json';
import '../CSS/CardComponent.css';

const CardGridComponent = () => {
    
    return (
        <div className={'card__grid'}>
          {dataTest.map((data) =>
            <CardComponentContainer key={data.id} src={data.src} name={data.name} phone={data.phone} role={data.role} email={data.email}/>
          )}
        </div>
      );
}

export default CardGridComponent;