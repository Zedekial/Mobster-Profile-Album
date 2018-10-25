import React, { Component } from 'react';

export class CardMediaComponent extends Component {
    render(){
        return ( 
        <div onClick={this.props.onClick} className={this.props.className}>
            <img src={this.props.src}></img>
            <h1>{this.props.name}</h1>
        </div>
        );
    }
}