import React, { Component } from 'react';

export class CardDetailsComponent extends Component{
    render() {
        return (
            <div onClick={this.props.onClick} className={this.props.className}>
                <h2>{this.props.name}</h2>
                <ul>
                    <li>phone: {this.props.phone}</li>
                    <li>email: {this.props.email}</li>
                    <li>role: {this.props.role}</li>
                </ul>
            </div>
        );
    }
}
