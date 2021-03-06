import React from 'react';

export const CardMediaComponent = (props) => {
    return (
        <div onClick={props.onClick} className={props.className}>
            <img draggable='false' alt={props.name + ' img'} src={props.src}></img>
            <h1>{props.name}</h1>
        </div>
    );
}
