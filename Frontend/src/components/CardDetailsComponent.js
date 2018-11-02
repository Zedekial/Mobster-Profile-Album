import React from 'react';

export const CardDetailsComponent = (props) => {
    return (
        <div onClick={props.onClick} className={props.className}>
            <h2>{props.name}</h2>
            <ul>
                <li>Phone: {props.phone}</li>
                <li>Email: {props.email}</li>
                <li>Role: {props.role}</li>
            </ul>
            <button onClick={props.handleClick}>More details</button>
        </div>
    );
}
