import React, { Component } from 'react';

export const CardMediaComponent = (props) => {
    return ( 
        <div onClick={props.onClick} className={props.className}>
        <img src={props.src}></img>
        <h1>{props.name}</h1>
        </div>
        );
    }